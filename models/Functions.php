<?php

    class Data {
        // Table (remember to name this variable the same when you create your table in database)
        private $table = '';

        // Post properties
        public $positions;

        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function savePositionsToDatabase(){
            $query = 'INSERT INTO ' . $this->table . '
                SET
                positions = :positions';

            // Query preparing, binding & execution
            $stmt = $this->conn->prepare($query);

            $stmt->bindParam(':positions', $this->positions);

            if($stmt->execute()){
                return true;
            }

            printf("Error:", $stmt->error);
            return false;
        }
    }
