module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    //return this.addBowerPackageToProject('bootstrap-datepicker');
    return this.addBowerPackageToProject('https://github.com/abodo-dev/bootstrap-datepicker.git#dropdown-menu-style');
  }
};
