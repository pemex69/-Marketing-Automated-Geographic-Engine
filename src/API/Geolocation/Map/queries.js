//Path to DB: 'SELECT t.* FROM "Consults_schema"."AGEBS CDMX" t'
//Get all the geometry data from the database, column name is 'geom'
const GetAllSettlements = 'SELECT ST_AsEWKB(geom) FROM "Consults_schema"."AGEBS CDMX" t';
//Get the geojson data from the database and return the specified one (GetAgebByCvegeo)
const GetAgebByCvegeo = 'SELECT t.*, CTID FROM "Consults_schema"."AGEB DATA CDMX" t WHERE t.cvegeo = $1';

module.exports = {
    GetAllSettlements,
    GetAgebByCvegeo
};