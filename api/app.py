
from flask import Flask, jsonify, request
from joblib import load

app = Flask(__name__)
model = load('model.joblib')


@app.route('/emission', methods=['GET'])
def emission():
    enginesize = request.args.get('esize')
    print(type(enginesize))
    cylinders = request.args.get('cyd')
    fuelType = request.args.get('type')
    fuelConsumption = request.args.get('cons')
    F1, F2, F3 = (fuelType.split(','))
    print(F2)
    input = [float(enginesize), float(cylinders),
             float(fuelConsumption), float(F1), float(F2), float(F3)]

    res = model.predict([input]).flatten()
    # print(res.flatten())
    return (jsonify(res[0]))


# driver function
if __name__ == '__main__':

    app.run()
