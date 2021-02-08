<?php

    class Data {
        // Table (to be created)
        private $table = '';

        // Post properties
        public $positions;

        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function savePositionsToDatabase(){
            // Query
            $query = 'INSERT INTO ' . $this->table . '
                SET
                positions = :positions';

            // Prepare statement
            $stmt = $this->conn->prepare($query);

            // Bind data
            $stmt->bindParam(':positions', $this->positions);

            // Execute query
            if($stmt->execute()){
                return true;
            }

            // Print error
            printf("Error:", $stmt->error);
            return false;
        }
    }
