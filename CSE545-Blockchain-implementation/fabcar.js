/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    // init ledger

    async initLedger(ctx){
        const team = {Project: "Sofware Security", Leader: "Bhavya", Deputy: "Renuka"};
        await ctx.stub.putState("Project Details",Buffer.from(JSON.stringify(team)));
        return "success"

    }

    // write data

	async writeData(ctx,key,content){
		    const data = {
					content
			                        };

		    await ctx.stub.putState(key,Buffer.from(JSON.stringify(data)))
		    return data;
	}
	

    async writePaymentData(ctx,key,patient_name,amount,date){
	const data = {
			patient_name,
			amount,
			date
			
		        };
	    
        await ctx.stub.putState(key,Buffer.from(JSON.stringify(data)))
        return data;
    }

async writeReportData(ctx,key,patient_name,report_content,date){
	    const data = {
		                        patient_name,
		                        report_content,
		                        date

		                        };

	    await ctx.stub.putState(key,Buffer.from(JSON.stringify(data)))
	    return data;
}

    
}

module.exports = FabCar;
