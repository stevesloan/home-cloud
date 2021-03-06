use crate::api::*;
use actix_web::web;

pub fn config_services(cfg: &mut web::ServiceConfig) {
    info!("Configurating routes...");
    cfg.service(
        web::scope("/api")
            .service(ping_controller::ping)
            .service(
                web::scope("/auth")
                    .service(
                        web::resource("/signup")
                            .route(web::post().to_async(account_controller::signup))
                    )
                    .service(
                        web::resource("/login")
                            .route(web::post().to_async(account_controller::login))
                    )
                    .service(
                        web::resource("/logout")
                            .route(web::post().to_async(account_controller::logout))
                    )
            )
            .service(
                web::scope("/address-book")
                    .service(
                        web::resource("")
                            .route(web::get().to_async(address_book_controller::find_all))
                            .route(web::post().to_async(address_book_controller::insert))
                    )
                    .service(
                        web::resource("/{id}")
                            .route(web::get().to_async(address_book_controller::find_by_id))
                            .route(web::put().to_async(address_book_controller::update))
                            .route(web::delete().to_async(address_book_controller::delete))
                    )
                    .service(
                        web::resource("/query/{query}")
                            .route(web::get().to_async(address_book_controller::query))   
                    )
            )
    );
}