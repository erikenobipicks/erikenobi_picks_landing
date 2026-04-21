"""WSGI entry point that serves the static Instagram link tree landing."""
import logging
import os
import secrets

from flask import Flask, abort, send_from_directory

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_FILES = frozenset({
    "index.html",
    "styles.css",
    "script.js",
    "social-preview.svg",
})

app = Flask(__name__, static_folder=None)

_secret_key = os.environ.get("SECRET_KEY")
if not _secret_key:
    _secret_key = secrets.token_urlsafe(64)
    logging.warning(
        "SECRET_KEY env var not set; generated an ephemeral key. "
        "Set SECRET_KEY in Railway → Variables to keep sessions stable across restarts."
    )
app.config["SECRET_KEY"] = _secret_key


@app.route("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/<path:filename>")
def asset(filename):
    if filename not in PUBLIC_FILES:
        abort(404)
    return send_from_directory(BASE_DIR, filename)


@app.route("/healthz")
def healthz():
    return {"status": "ok"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
