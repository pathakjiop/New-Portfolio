use actix_web::{web, App, HttpServer, Responder, HttpResponse};
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
struct FormData {
    name: String,
    email: String,
    message: String,
}

async fn submit_form(form_data: web::Json<FormData>) -> impl Responder {
    // Here you would handle the form submission, e.g., send an email, store in database, etc.
    println!("Received form data: {:?}", form_data);
    
    // Return a simple response to the client
    HttpResponse::Ok().body("Form submitted successfully!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/submit-form", web::post().to(submit_form))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
