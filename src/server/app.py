import os
from flask import Flask, request, make_response, jsonify, render_template
from flask_cors import CORS
from utilities import wakati

app = Flask(__name__, 
            static_folder="client/static", 
            template_folder="client/static/public")
            
CORS(app) #Cross Origin Resource Sharing

@app.route("/", methods=['GET'])
def index():
    path = os.getcwd() + "/../" + app.template_folder
    normpath = os.path.normpath(path)
    # filepath = os.path.join(normpath, 'index.html')
    app.template_folder = normpath
    # print(os.path.isfile(filepath))
    # return render_template('index.html')
    return 'Hello World'

@app.route("/Link=<path:path>", methods=['GET','POST'])
def router(path):
    print(path)
    #print(request.get_json()) # -> {'post_text': 'テストテストテスト'}
    try:
        data = request.get_json()
        text = data['post_text']
        res = wakati(text)
        response = {'result': res}
    # Render a not found html page
    except TypeError as e:
        print(e)
        response = {'result': 'NOT FOUND'}
    
    return make_response(jsonify(response))
    #print(response)
    

if __name__ == "__main__":
    app.debug = True
    app.run(host='127.0.0.1', port=5000)