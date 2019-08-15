#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use] extern crate rocket;

use rocket::response::content;
use rocket_contrib::json::Json;

#[get("/")]
fn index() -> content::Json<&'static str> {
    content::Json("{ 'hi': 'world' }")
}

fn main() {
    rocket::ignite().mount("/", routes![index]).launch();
}
