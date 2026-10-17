sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ats/tm/proc/managetravel/test/integration/pages/TravelList.gen",
	"ats/tm/proc/managetravel/test/integration/pages/TravelObjectPage.gen",
	"ats/tm/proc/managetravel/test/integration/pages/BookingObjectPage.gen"
], function (JourneyRunner, TravelListGenerated, TravelObjectPageGenerated, BookingObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ats/tm/proc/managetravel') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelListGenerated: TravelListGenerated,
			onTheTravelObjectPageGenerated: TravelObjectPageGenerated,
			onTheBookingObjectPageGenerated: BookingObjectPageGenerated
        },
        async: true
    });

    return runner;
});

