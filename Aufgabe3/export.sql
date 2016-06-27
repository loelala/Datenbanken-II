--------------------------------------------------------
--  Datei erstellt -Montag-Juni-27-2016   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Sequence PNR_SEQUENZE
--------------------------------------------------------

   CREATE SEQUENCE   "PNR_SEQUENZE"  MINVALUE 1 MAXVALUE 999999999999999999999999999 INCREMENT BY 1 START WITH 201 CACHE 20 NOORDER  NOCYCLE ;
--------------------------------------------------------
--  DDL for Table ANGESTELLTE
--------------------------------------------------------

  CREATE TABLE "ANGESTELLTE" 
   ("AN_NR" NUMBER(*,0), 
	"AN_NAME" VARCHAR2(50 BYTE), 
	"GEBURTSDATUM" DATE, 
	"BERUFSBEZEICHNUNG" VARCHAR2(50 BYTE), 
	"MONATSGEHALT" NUMBER(*,0), 
	"GESCHLECHT" VARCHAR2(50 BYTE)
   );
--------------------------------------------------------
--  DDL for Table ARBEITER
--------------------------------------------------------

  CREATE TABLE "ARBEITER" 
   (	"AB_NAME" VARCHAR2(50 BYTE), 
	"AB_VORNAME" VARCHAR2(50 BYTE), 
	"GEBURTSDATUM" VARCHAR2(5 BYTE), 
	"STUDENLOHN" NUMBER(*,0)
   );
--------------------------------------------------------
--  DDL for Table BERUFE
--------------------------------------------------------

  CREATE TABLE "BERUFE" 
   (	"CODE" NUMBER(*,0), 
	"BEZEICHNUNG" VARCHAR2(50 BYTE)
   );
   
--------------------------------------------------------
--  DDL for Table GESCHLECHTER
--------------------------------------------------------

  CREATE TABLE "GESCHLECHTER" 
   (	"CODE" NUMBER(*,0), 
	"BESCHREIBUNG" VARCHAR2(15 BYTE)
   );
--------------------------------------------------------
--  DDL for Table ZUORDNUNG
--------------------------------------------------------

  CREATE TABLE "ZUORDNUNG" 
   (	"PERSONALNUMMER" NUMBER(*,0), 
	"HERKUNFT" VARCHAR2(20 BYTE), 
	"HERKUNFT_KEY" VARCHAR2(40 BYTE)
   );
--------------------------------------------------------
--  DDL for Table PERSONAL
--------------------------------------------------------

  CREATE TABLE "PERSONAL" 
   (	"PERSONALNUMMER" NUMBER(*,0), 
	"P_NAME" VARCHAR2(50 BYTE), 
	"P_VORNAME" VARCHAR2(50 BYTE), 
	"P_ALTER" NUMBER(*,0), 
	"GESCHLECHT" NUMBER(*,0), 
	"BERUFSCODE" NUMBER(*,0), 
	"EINKOMMEN" NUMBER(*,0)
   );
   

--------------------------------------------------------
--  Constraints for Table ANGESTELLTE
--------------------------------------------------------

  ALTER TABLE  "ANGESTELLTE" ADD PRIMARY KEY ("AN_NR")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table ARBEITER
--------------------------------------------------------

  ALTER TABLE  "ARBEITER" ADD PRIMARY KEY ("AB_NAME", "AB_VORNAME")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table BERUFE
--------------------------------------------------------

  ALTER TABLE  "BERUFE" ADD PRIMARY KEY ("CODE")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table GESCHLECHTER
--------------------------------------------------------

  ALTER TABLE  "GESCHLECHTER" ADD CONSTRAINT "PK_GESCHLECHTER" PRIMARY KEY ("CODE", "BESCHREIBUNG")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE  "GESCHLECHTER" MODIFY ("BESCHREIBUNG" NOT NULL ENABLE);
 
  ALTER TABLE  "GESCHLECHTER" MODIFY ("CODE" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table ZUORDNUNG
--------------------------------------------------------

  ALTER TABLE  "ZUORDNUNG" ADD PRIMARY KEY ("PERSONALNUMMER")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table PERSONAL
--------------------------------------------------------

  ALTER TABLE  "PERSONAL" ADD PRIMARY KEY ("PERSONALNUMMER")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table PERSONAL
--------------------------------------------------------

  ALTER TABLE  "PERSONAL" ADD FOREIGN KEY ("BERUFSCODE")
	  REFERENCES  "BERUFE" ("CODE") ENABLE;


--------------------------------------------------------
--  DDL for Function GETAGE
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "GETAGE" (birthdate DATE)
RETURN NUMBER
IS
age Number;
BEGIN 
age := (months_between(sysdate, birthdate) / 12);
RETURN trunc(age,0);
END;

/
--------------------------------------------------------
--  DDL for Function GETAGEWORKER
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "GETAGEWORKER" (birthdate VARCHAR2)
RETURN NUMBER
IS
age NUMBER;
tmp VARCHAR2(10);
theDate Date;
BEGIN
tmp := CONCAT('01.', birthdate);
theDate := TO_DATE(tmp,'DD.MM.RR');
age := (months_between(sysdate, theDate) / 12);
RETURN trunc(age,0);
END;

/
--------------------------------------------------------
--  DDL for Function GETFIRSTNAME
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION  "GETFIRSTNAME" (komplete Varchar2)
Return varchar2
IS
BEGIN 
RETURN substr(komplete, 0, instr(komplete, ' ')-1);
End;

/
--------------------------------------------------------
--  DDL for Function GETGENDERCODE
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION  "GETGENDERCODE" (gender VARCHAR2)
Return Number
IS
genderCode NUMBER;
BEGIN 
 IF gender = 'weiblich' THEN
     genderCode := 1;
   ELSIF gender = 'männlich' THEN 
     genderCode := 2;
   ELSE 
    SELECT count(CODE) into genderCode FROM GESCHLECHTER
    WHERE BESCHREIBUNG = gender;
    IF genderCode != 0 THEN 
      SELECT CODE into genderCode FROM GESCHLECHTER
      WHERE BESCHREIBUNG = gender;
    END IF;
 END IF;
 RETURN genderCode;
END;

/
--------------------------------------------------------
--  DDL for Function GETJOBCODE
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION  "GETJOBCODE" (jobDesc VARCHAR2)
RETURN NUMBER
IS
jobCode NUMBER;
maxCode NUMBER;
countCode NUMBER;
BEGIN
  IF jobDesc IS NULL 
    THEN jobCode := 0;
  ELSE 
    SELECT COUNT(CODE) into countCode FROM BERUFE
    WHERE BEZEICHNUNG = jobDesc;
    IF countCode = 0 THEN 
      SELECT max(Code) into maxCode FROM BERUFE;
      maxCode := maxCode + 1;
      INSERT INTO BERUFE VALUES (maxCode, jobDesc);
      jobCode := maxCode;
    ELSE 
      SELECT CODE INTO jobCode 
      FROM BERUFE 
      WHERE BERUFE.BEZEICHNUNG = jobDesc;
    END IF;
 END IF;
 
 RETURN jobCode;
  
END;

/
--------------------------------------------------------
--  DDL for Function GETLASTNAME
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION  "GETLASTNAME" (komplete Varchar2)
Return varchar2
IS
BEGIN 
RETURN substr(komplete, instr(komplete, ' ')+1);
End;

/
--------------------------------------------------------
--  DDL for Function GETYEARLYINCOME
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION  "GETYEARLYINCOME" (income NUMBER, flag NUMBER)
RETURN NUMBER
IS
arbeitsstunden NUMBER;
yearlyIncome NUMBER;
BEGIN
arbeitsstunden := 2080;
IF flag = 0 THEN 
  --Arbeiter 
  yearlyIncome := income *  arbeitsstunden;
ELSE
  --Angestellter
  yearlyIncome := income * 12;
END IF;
RETURN yearlyIncome;
END;

/
--------------------------------------------------------
--  DDL for Procedure TRANSFERANGESTELLTE
--------------------------------------------------------

  CREATE OR REPLACE PROCEDURE  "TRANSFERANGESTELLTE" 
IS
  p_name VARCHAR2(100);
  p_age DATE;
  p_nr NUMBER;
  a_nr Number;
  p_age_worker VARCHAR2(5);
  p_vorname VARCHAR2(100);
  p_gender VARCHAR2(30);
  p_job VARCHAR2(50);
  p_einkommen NUMBER;
  arb_nr VARCHAR2(60);
  tmp NUMBER;
  tmp_Nachname VARCHAR2(30);
  tmp_Vorname VARCHAR2(30);
  CURSOR CAngestellter
  IS 
  SELECT AN_NR, AN_NAME, GEBURTSDATUM, GESCHLECHT, BERUFSBEZEICHNUNG, MONATSGEHALT
  FROM ANGESTELLTE;
  CURSOR CArbeiter 
  IS 
  SELECT AB_NAME, AB_VORNAME, GEBURTSDATUM, STUDENLOHN
  FROM ARBEITER;
BEGIN 
  OPEN CAngestellter;
  LOOP 
    FETCH CAngestellter
    INTO a_nr, p_name, p_age, p_gender, p_job, p_einkommen;
    EXIT WHEN CAngestellter%NOTFOUND;
      tmp_Nachname := getLastname(p_name);
      tmp_Vorname := getFirstname(p_name);
      SELECT Count(HERKUNFT_KEY) INTO tmp FROM ZUORDNUNG WHERE HERKUNFT_KEY = TO_CHAR(a_nr,'99999999');
      IF tmp <= 0 THEN 
        SELECT pnr_sequenze.nextval INTO p_nr FROM DUAL;
        INSERT INTO PERSONAL(PERSONALNUMMER, P_NAME, P_VORNAME, P_ALTER, GESCHLECHT, BERUFSCODE, EINKOMMEN)
        VALUES (p_nr, tmp_Nachname , tmp_Vorname, getAge(p_age), getGenderCode(p_gender),
        GETJOBCODE(p_job), GETYEARLYINCOME(p_einkommen, 1));
        INSERT INTO ZUORDNUNG (PERSONALNUMMER, HERKUNFT, HERKUNFT_KEY) VALUES (p_nr, 'Angestellter', TO_CHAR(a_nr, '99999999'));
      ELSE 
        SELECT PERSONALNUMMER INTO p_nr FROM ZUORDNUNG WHERE HERKUNFT_KEY = TO_CHAR(a_nr,'99999999');
        UPDATE PERSONAL SET PERSONALNUMMER = p_nr, P_NAME = tmp_Nachname, P_VORNAME = tmp_Vorname, P_ALTER = getAge(p_age), GESCHLECHT = getGenderCode(p_gender),
        BERUFSCODE = GETJOBCODE(p_job), EINKOMMEN = GETYEARLYINCOME(p_einkommen, 1) 
        WHERE PERSONALNUMMER = 
        (Select PERSONALNUMMER 
          FROM ZUORDNUNG 
          WHERE HERKUNFT_KEY = TO_CHAR(a_nr,'99999999'));
      END IF;
  END LOOP;
  CLOSE CAngestellter;
  
  
  OPEN CArbeiter;
  LOOP 
    FETCH CArbeiter
    INTO p_name, p_vorname, p_age_worker, p_einkommen;
    EXIT WHEN CArbeiter%NOTFOUND;
      arb_nr := CONCAT(CONCAT(p_name,','),p_vorname);
      SELECT Count(HERKUNFT_KEY) INTO tmp FROM ZUORDNUNG WHERE HERKUNFT_KEY = arb_nr;
      IF tmp = 0 THEN 
      SELECT pnr_sequenze.nextval INTO p_nr FROM DUAL;
      INSERT INTO PERSONAL(PERSONALNUMMER, P_NAME, P_VORNAME, P_ALTER, GESCHLECHT, BERUFSCODE, EINKOMMEN)
      VALUES (p_nr,p_name, p_vorname, getAgeWorker(p_age_worker), getGenderCode(p_vorname),
      GETJOBCODE(NULL), GETYEARLYINCOME(p_einkommen, 0));
      INSERT INTO ZUORDNUNG (PERSONALNUMMER, HERKUNFT, HERKUNFT_KEY) VALUES (p_nr, 'Arbeiter', arb_nr);
      ELSE 
       UPDATE PERSONAL SET P_NAME = p_name, P_VORNAME = p_vorname, P_ALTER = getAgeWorker(p_age_worker), GESCHLECHT = getGenderCode(p_vorname),
        BERUFSCODE = GETJOBCODE(NULL), EINKOMMEN = GETYEARLYINCOME(p_einkommen, 0) 
        WHERE PERSONALNUMMER = 
        (Select PERSONALNUMMER 
          FROM ZUORDNUNG 
          WHERE HERKUNFT_KEY = arb_nr);
      END IF;
    END LOOP;
    CLOSE CArbeiter;
END;

/
