import { IExecuteFunctions } from 'n8n-core';
import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

// Import all libraries
import * as pdfParse from 'pdf-parse';
import * as PDFLib from 'pdf-lib';
import * as pdfjsDist from 'pdfjs-dist';
import * as bcrypt from 'bcrypt';
import * as bodyParser from 'body-parser';
import * as FCM from 'fcm-push';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import * as FormData from 'form-data';
import axios from 'axios';
import * as _ from 'lodash';
import * as moment from 'moment';
import * as dotenv from 'dotenv';

export class Libraries implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Additional Libraries',
		name: 'libraries',
		icon: 'libraries.svg',
		group: ['transform'],
		version: 1,
		description: 'Provides additional JavaScript libraries for N8N',
		defaults: {
			name: 'Libraries',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Info',
				name: 'info',
				type: 'notice',
				default: 'This node provides additional JavaScript libraries for use in N8N Function nodes.',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		// Simply pass through the input data
		returnData.push(...items);

		return [returnData];
	}
} 