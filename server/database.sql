ALTER SYSTEM SET datestyle to "ISO, DMY";
CREATE DATABASE learning_app;

CREATE TABLE roles (
	role_id SERIAL PRIMARY KEY,
	name VARCHAR(50)
);

INSERT INTO roles (role_id, name) VALUES (1, 'Admin');
INSERT INTO roles (role_id, name) VALUES (2, 'Diák');
INSERT INTO roles (role_id, name) VALUES (3, 'Tanár');
INSERT INTO roles (role_id, name) VALUES (4, 'Szülő');

CREATE TABLE schools(
	school_id SERIAL PRIMARY KEY,
	name VARCHAR(250),
	address VARCHAR(250),
	email VARCHAR(250)
);

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	role_id INT,
	name VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255),
	gender VARCHAR(6),
	date_of_birth DATE,
	city VARCHAR(150),
	school_id INT,
	class varchar(255),
	points INT,

	CONSTRAINT fk_role FOREIGN KEY(role_id)
	REFERENCES roles(role_id) ON DELETE CASCADE,
	CONSTRAINT fk_school FOREIGN KEY(school_id)
	REFERENCES schools(school_id) ON DELETE CASCADE
);

CREATE TABLE badges (
	badge_id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	required_points INT
);

CREATE TABLE user_badges (
	user_id INT,
	badge_id INT,

	CONSTRAINT fk_users FOREIGN KEY(user_id)
	REFERENCES users(user_id) ON DELETE CASCADE,
	CONSTRAINT fk_badges FOREIGN KEY(badge_id)
	REFERENCES badges(badge_id) ON DELETE CASCADE
);


CREATE TABLE lessons(
	lesson_id SERIAL PRIMARY KEY,
	category VARCHAR(100),
	text_of_lesson TEXT,
	level INT
);

CREATE TABLE labels(
	label_id SERIAL PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE words(
	word_id SERIAL PRIMARY KEY,
	word VARCHAR(250),
	label_id INT,

	CONSTRAINT fk_labels FOREIGN KEY(label_id)
	REFERENCES labels(label_id) ON DELETE CASCADE
);

CREATE TABLE sentences (
	sentence_id SERIAL PRIMARY KEY,
	sentence TEXT,
	type VARCHAR(50)
);

CREATE TABLE lesson_sentences(
	ls_id SERIAL PRIMARY KEY,
	sentence_id INT,
	lesson_id INT,
	
	CONSTRAINT fk_sentences FOREIGN KEY(sentence_id)
	REFERENCES sentences(sentence_id) ON DELETE CASCADE,
	CONSTRAINT fk_lessons FOREIGN KEY(lesson_id)
	REFERENCES lessons(lesson_id) ON DELETE CASCADE
);

CREATE TABLE sentence_words(
	sw_id SERIAL PRIMARY KEY,
	sentence_id INT,
	word_id INT,
	
	CONSTRAINT fk_sentences FOREIGN KEY(sentence_id)
	REFERENCES sentences(sentence_id) ON DELETE CASCADE,
	CONSTRAINT fk_words FOREIGN KEY(word_id)
	REFERENCES words(word_id) ON DELETE CASCADE
);

CREATE TABLE tests (
	test_id INT,
	title VARCHAR(255),
	owner_id INT,
	class_id INT,
	public BOOLEAN,

	CONSTRAINT fk_classes FOREIGN KEY(class_id)
	REFERENCES classes(class_id) ON DELETE CASCADE
);

CREATE TABLE tasks(
	task_id INT,
	test_id INT,
	category VARCHAR(150),
	task_type VARCHAR(150),
	text_of_the_question TEXT,
	answers TEXT[],
	points INT,
	choice_array TEXT[]
);


CREATE TABLE answers(
	answer_id SERIAL PRIMARY KEY,
	task_id INT,
	answer_text VARCHAR(250),
	question_text VARCHAR(250),
	correct BOOLEAN,

	CONSTRAINT fk_tasks FOREIGN KEY(task_id)
	REFERENCES tasks(task_id) ON DELETE CASCADE
);

CREATE TABLE schools(
	school_id SERIAL PRIMARY KEY,
	name VARCHAR(250),
	address VARCHAR(250),
	email VARCHAR(250)
);

CREATE TABLE classes (
	class_id SERIAL PRIMARY KEY,
	class_name VARCHAR(255),
	school_id INT,
	teacher_id INT,

	CONSTRAINT fk_schools FOREIGN KEY(school_id)
	REFERENCES schools(school_id) ON DELETE CASCADE,
	CONSTRAINT fk_teachers FOREIGN KEY(teacher_id)
	REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE tests (
	test_id SERIAL PRIMARY KEY,
	title VARCHAR(255)
	owner_id INT,
	class_id INT,
	public BOOLEAN,

	CONSTRAINT fk_classes FOREIGN KEY(class_id)
	REFERENCES classes(class_id) ON DELETE CASCADE
);

   "task_id": 2,
        "test_id": 1,
        "category": "Az alany",
        "task_type": "dropdownlist",
        "text_of_the_question": "Határozd meg a megadott mondatok alanyának fajtáját és válaszd ki a megfelelőt a legördülő listából.",
        "answers": [


INSERT INTO tests (title) VALUES ('Teszt 1');

INSERT INTO answers (task_id, answer_text, correct) VALUES (
	1,
	"Mirci",
	"false"
);

INSERT INTO users (role_id, email, password) VALUES ( 3, 'teacher@gmail.com', 'teacher');

INSERT INTO lessons (category, text_of_lesson, level) VALUES ('Az állítmány', 
'Az állítmány a tagolt mondat központi szerepű mondatrésze. Az alany az a mondatrész, amely megnevezi azt a dolgot, személyt, amelyre az állítmány megállapítása vonatkozik.
A mondat állítását tartalmazza, a Mit állítok? kérdésre válaszol. Igei természetű mondatrész, de ez nem azt jelenti hogy csak ige lehet, hanem azt, hogy ki kell fejeznie a benne megfogalmazott állítás idejét, az alany személyét és számát, és a beszélőnek az igemódokban kifejezett viszonyulását az eseményekhez.',
 1);

INSERT INTO lessons (category, text_of_lesson, level) VALUES ('Az alany', 
'Az alany az a mondatrész, amelyre az állítmányban megfogalmazott állítás vonatkozik. Az alany az állítmány kötelező vonzata. Az alany és az állítmány alárendelő viszonyban vannak egymással.
',
 1);


