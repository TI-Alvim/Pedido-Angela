# server.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# O CORS permite que o Angular (rodando em outra porta) converse com o Python
CORS(app) 

@app.route('/api/aceitou', methods=['POST'])
def salvar_resposta():
    # Aqui o Python atua registrando no "banco de dados"
    print("Sucesso! A Ângela disse SIM!")
    return jsonify({"status": "sucesso", "mensagem": "Resposta gravada para a eternidade!"}), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)