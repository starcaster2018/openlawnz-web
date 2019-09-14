class ApiService {
	/**
	 * define base url and field schemas here
	 * @returns {ApiService}
	 */
	constructor() {
		this.apiUrl = API_URL + "/graphiql";
		this.caseFields = `{
			caseName,
			id,
			casesCitedsByCaseCited {
				caseByCaseCited {
					caseName,
					id
				}
			},
			cites {
				id,
<<<<<<< HEAD
				caseName
			},
			legislationToCases {
				section,
				legislation {
					title
				}
			},
			pdf {
				pdfDbKey
			}
		}
	}`;
||||||| merged common ancestors
				case_name
      },
      legislationReferences
      {
        section,
        legislation
        {
          title,
        }
      }

		}`;
=======
				caseName
			},
			legislationToCases {
				section,
				legislation {
					title
				}
			},
			pdf {
				pdfDbKey
			}
		}
	`;
>>>>>>> 1210294c57122fcac822c0c311d85430f528d94f
	}

	/**
	 * Generic function to fetch data from server
	 * @param {string} query
	 * @returns {unresolved}
	 */
	async getGraphQlData(resource, params, fields) {
		const query = `
			query singleCase {
				${resource} ${this.paramsToString(params)} 
				${fields}
			}`;
		const res = await fetch(`${this.apiUrl}`, {
			method: "POST",
			body: JSON.stringify({
				query: query
			}),
			headers: {
				"Content-Type": "application/json"
			}
		});

		const body = await res.json();
		return body.data;
	}

	/**
	 *
	 * @param {object} params
	 * @returns {array} cases list or empty list
	 */
	async getCases(params = {}) {
		const data = await this.getGraphQlData("cases", params, this.caseFields);
		return data.cases;
	}

	async getCase(params = {}) {
		const data = await this.getGraphQlData("case", params, this.caseFields);
		return data.case;
	}

	/**
*
* @param {object} params
* @returns {String} params
converted to string for usage in graphQL
*/
	paramsToString(params) {
		let paramString = "";
		if (params.constructor === Object && Object.keys(params).length) {
			let tmp = [];
			for (const key in params) {
				let paramStr = params[key];
				if (paramStr !== "") {
					if (typeof params[key] === "string") {
						paramStr = `"${paramStr}"`;
					}
					tmp.push(`${key}:${paramStr}`);
				}
			}
			if (tmp.length) {
				paramString = `(${tmp.join()})`;
			}
		}
		return paramString;
	}
}
export default new ApiService();
