Template.companyStatistics.helpers({

    companyRegistrationDate: function () {
        return '---';
    },
    totalUsers: function () {
        return '---';
    },
    companyAdminName: function () {
        return '---';
    },
    totalStaff: function () {
        return Staff.find().count();
    },
    totalDepartment: function () {
        return Department.find().count();
    },
    totalHoliday: function () {
        return Holiday.find().count();
    }
});