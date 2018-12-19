class ApiService {
	/**
	 * define base url and field schemas here
	 * @returns {ApiService}
	 */
	constructor() {
		this.apiUrl = API_URL + "/graphql";
		this.caseFields = `{
			id,
			case_name,
      PDF
      {
        bucket_key
      },
			cited_by
			{
				id,
				case_name
			},
			cites
			{
				id,
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
	}

	/**
	 * Generic function to fetch data from server
	 * @param {string} query
	 * @returns {unresolved}
	 */
	async getGraphQlData(resource, params, fields) {
		const query = `{${resource} ${this.paramsToString(params)} ${fields}}`;
		const res = await fetch(`${this.apiUrl}?query=${encodeURIComponent(query)}`);

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
			for (let key in params) {
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
