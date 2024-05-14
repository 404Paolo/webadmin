CREATE TABLE Users (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_uname TEXT,
  user_lname TEXT,
  user_fname TEXT,
  user_mname TEXT,
  user_address TEXT,
  user_pass TEXT,
  user_branch TEXT,
  user_designation TEXT,
  user_role TEXT,
  user_pic BLOB,
  user_creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_creator INTEGER REFERENCES Users(user_id)
);

CREATE TABLE Medicines (
  med_id INTEGER PRIMARY KEY AUTOINCREMENT,
  med_name TEXT,
  med_category TEXT,
  med_description TEXT,
  med_shelflife INTEGER,
  med_pic BLOB
);

CREATE TABLE Inventory (
  inv_id INTEGER PRIMARY KEY AUTOINCREMENT,
  inv_med_id INTEGER REFERENCES Medicines(med_id),
  inv_reception DATE,
  inv_expiry DATE,
  inv_description TEXT,
  inv_quantity INTEGER,
  inv_qrcode TEXT,
  inv_consumptionRate FLOAT
);

CREATE TABLE Deliveries (
  dlv_id INTEGER PRIMARY KEY AUTOINCREMENT,
  dlv_receptor_id INTEGER REFERENCES Users(user_id),
  dlv_reception DATE,
  dlv_courier DATE,
  dlv_source INTEGER,
  dlv_destination TEXT
);

CREATE TABLE Transactions (
  trns_id INTEGER PRIMARY KEY AUTOINCREMENT,
  trns_transactor_id INTEGER REFERENCES Users(user_id),
  trns_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  trns_inventory INTEGER REFERENCES Inventory(inv_id),
  trns_qtyissued INTEGER
);
