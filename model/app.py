from flask import Flask,url_for,request,render_template,jsonify,send_file
from flask_bootstrap import Bootstrap
from flask_cors import CORS, cross_origin

from textblob import TextBlob
from wordcloud import WordCloud
import matplotlib.pyplot as plt 
import spacy
import hu_core_ud_lg
import json

#Initialize app
app = Flask(__name__)
Bootstrap(app)
CORS(app)


nlp = spacy.load("./models/model-best")

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/analyze', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type'])
def analyze():
    data = request.get_json()
    sentence = data['sentence']
    print(sentence)

    docx = nlp(sentence)

    #custom_tokens = [ (token.text, token.) for token in docx ]
    custom_postagging = [(word.text,word.tag_,word.dep_) for word in docx]

    allData = [('"Token":"{}","Tag":"{}","POS":"{}","Dependency":"{}"'.format(token.text,token.tag_,token.pos_,token.dep_)) for token in docx ]
    result_json = json.dumps(custom_postagging, sort_keys = False, indent = 2)

    return result_json

if __name__ == '__main__':
    app.run(debug="True")

#flask run --host=0.0.0.0 --port=8080