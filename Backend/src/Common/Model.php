<?php
class Model {
  protected $host = 'localhost';
  protected $dbname = 'test-db';
  protected $username = 'root';
  protected $password = '';
  public $conn;

  public function __construct() {
    try {
      $this->conn = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->username, $this->password);
      $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      echo 'thanh cong';
    } catch (PDOException $e) {
      echo 'Connection fail: '.$e->getMessage();
    }
  }

  public function __destruct() {
    $this->conn = null;
  }
}