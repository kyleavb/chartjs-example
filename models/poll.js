'use strict';
module.exports = (sequelize, DataTypes) => {
  var poll = sequelize.define('poll', {
    name: DataTypes.STRING,
    answer: DataTypes.STRING,
    survey: DataTypes.INTEGER
  }, {});
  poll.associate = function(models) {
    // associations can be defined here
  };
  return poll;
};