
// const Interest = require('./interest')
const Opportunity = require('../opportunity/opportunity')

/**
  api/search?q='keyword' -> lists all opportunities with properties matching the keyword.
 */
const searchOpportunities = async (req, res) => {
  console.log(req.query)
  const opportunities = await Opportunity.find({}).exec()
  try {
    // const opps;
    if (req.query.q) {
      // search
      res.json(opportunities)
    } else {
      res.status(400).send('Bad Request: must include keyword parameters')
    }
  } catch (err) {
    console.log(err)
    res.status(404).send(err)
  }
}

module.exports = {
  searchOpportunities
}
