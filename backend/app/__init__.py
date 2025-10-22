from flask import Flask
from app.routes.api import api
from app.routes.study_mode import study_mode_llm
from app.routes.assignment_mode import assignment_llm

def create_app():
    app = Flask(__name__)
    app.register_blueprint(api)
    app.register_blueprint(study_mode_llm)
    app.register_blueprint(assignment_llm)
    return app