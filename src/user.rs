#[derive(Serialize, Deserialize)]
pub struct User {
    pub id: Option<i32>,
    pub username: String,
    pub firstname: String,
    pub lastname: String,
    pub password: String,
}