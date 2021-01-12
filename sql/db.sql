CREATE TABLE IF NOT EXISTS projects(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL,
);

CREATE TABLE IF NOT EXISTS tasks(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectId INTEGER REFERENCES projects(id),
);

INSERT INTO projects(name,priority,description,deliverydate)
VALUES('Make a web app',1,'Using javascript','2019-05-12')

INSERT INTO projects(name,priority,description,deliverydate)
VALUES('Make a app',1,'Using dart','2019-05-13')

INSERT INTO projects(name,priority,description,deliverydate)
VALUES('Make a desktop app',2,'Using c++','2019-05-14')

-- inser tasks

INSERT INTO tasks(name,done,projectId)
VALUES('Download vuejs', false, 1);

INSERT INTO tasks(name,done,projectId)
VALUES('Create ui web', false, 1);

INSERT INTO tasks(name,done,projectId)
VALUES('Download flutter', false, 2);

INSERT INTO tasks(name,done,projectId)
VALUES('Design Ui', false, 2);