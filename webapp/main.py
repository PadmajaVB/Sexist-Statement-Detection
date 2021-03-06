import tensorflow as tf
import numpy as np
import json
from tensorflow import keras
from flask import request, render_template, Flask

app = Flask(__name__)

@app.route("/", methods=['POST', 'GET'])
def sexist_or_not():
    model = keras.models.load_model('baseline_model')
    text = request.args.get("text")
    print(text)
    with open('dict.json') as json_file:
        dictionary = json.load(json_file)
    
    x_test = []
    for word in text.split():
        print(word)
        if word in dictionary:
            x_test.append(dictionary[word])
        else:
            x_test.append(dictionary["UNK"])

    result = model.predict([x_test])
    pred = result[0][0]
    sentiment = "The comment is not sexist"
    if pred>0.5:
        sentiment= "Yikes! The comment is Sexist"
    return render_template('main.html', data=sentiment)

    
    

        