
const util =  require('../util/utils');
module.exports = app => {
  const { STRING, INTEGER, DATE} = app.Sequelize;
  const wisJob = app.model.define('wis_job', {
    id: { type: INTEGER(20), primaryKey: true, autoIncrement: true },
    routeId: INTEGER(11),
    inspectorId: INTEGER(11),
    recipientId: INTEGER(11),
    startDate: { type: DATE, get() {
      return util.formatDate(this.getDataValue('startDate'))
    }},
    limitHours: INTEGER(11),
    deviceList: STRING(400),
    remarks: STRING(400),
  });
  return wisJob;
};

