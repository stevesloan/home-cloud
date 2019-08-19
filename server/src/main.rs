#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use] extern crate rocket;

use rocket::response::content;
use rocket_contrib::json::Json;


mod user;
use user::{User};

#[get("/")]
fn index() -> content::Json<&'static str> {
    content::Json("{ 'hi': 'world' }")
}

#[post("/", data = "<user>")]
fn create(user: Json<User>) -> Json<User> {
    user
}

fn main() {
    rocket::ignite().mount("/", routes![index]).launch();
}
