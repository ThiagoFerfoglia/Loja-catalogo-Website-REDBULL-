from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')


@app.route('/Races')
def races():
    return render_template('Races.html')

if __name__ == "__main__":
    app.run(debug=True)
