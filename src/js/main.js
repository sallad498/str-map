const countyData = {
  // Source: https://www.nyc.gov/site/hpd/services-and-information/short-term-rental.page
  '36005': { name: 'Bronx', score: 0.95, tier: 'Very High', permitRequired: 'Yes — city registration and use rules apply', ownerOccupancyRequired: 'Varies by building and host type', nightCap: '30 nights/year for unhosted stays', minimumStay: '30 nights — unhosted', zoningRestrictions: 'Restricted; NYC limits most short-term rentals in residential settings', regulations: ['Strict local permitting and registration requirements.', 'Most short-term uses are heavily restricted by NYC law.', 'Verify whether the building and host registration rules allow the strategy before purchasing.'] },
  // Source: https://www.nyc.gov/site/hpd/services-and-information/short-term-rental.page
  '36047': { name: 'Kings', score: 0.95, tier: 'Very High', permitRequired: 'Yes — city registration and use rules apply', ownerOccupancyRequired: 'Varies by building and host type', nightCap: '30 nights/year for unhosted stays', minimumStay: '30 nights — unhosted', zoningRestrictions: 'Restricted; NYC limits most short-term rentals in residential settings', regulations: ['Very restrictive short-term rental environment.', 'Expect tight local oversight, permit hurdles, and possible enforcement risk.', 'Buyer due diligence should confirm current zoning and host registration requirements.'] },
  // Source: https://www.nyc.gov/site/hpd/services-and-information/short-term-rental.page
  '36061': { name: 'New York', score: 0.95, tier: 'Very High', permitRequired: 'Yes — city registration and use rules apply', ownerOccupancyRequired: 'Varies by building and host type', nightCap: '30 nights/year for unhosted stays', minimumStay: '30 nights — unhosted', zoningRestrictions: 'Restricted; NYC limits most short-term rentals in residential settings', regulations: ['One of the most restrictive markets in the state.', 'Check the building and host registration rules before relying on rental income.', 'Local rules can change quickly, so review current enforcement guidance closely.'] },
  // Source: https://www.nyc.gov/site/hpd/services-and-information/short-term-rental.page
  '36081': { name: 'Queens', score: 0.95, tier: 'Very High', permitRequired: 'Yes — city registration and use rules apply', ownerOccupancyRequired: 'Varies by building and host type', nightCap: '30 nights/year for unhosted stays', minimumStay: '30 nights — unhosted', zoningRestrictions: 'Restricted; NYC limits most short-term rentals in residential settings', regulations: ['Local permitting and registration requirements are significant.', 'Many properties will face extra scrutiny for short-term rentals.', 'Confirm whether the specific building and neighborhood permit short-term stays.'] },
  // Source: https://www.nyc.gov/site/hpd/services-and-information/short-term-rental.page
  '36085': { name: 'Richmond', score: 0.95, tier: 'Very High', permitRequired: 'Yes — city registration and use rules apply', ownerOccupancyRequired: 'Varies by building and host type', nightCap: '30 nights/year for unhosted stays', minimumStay: '30 nights — unhosted', zoningRestrictions: 'Restricted; NYC limits most short-term rentals in residential settings', regulations: ['Expect a challenging approval path for short-term rentals.', 'Host registration and dwelling-use rules should be reviewed carefully.', 'Verify whether transient occupancy is allowed on the parcel or in the building.'] },
  '36059': { name: 'Nassau', score: 0.84, tier: 'High', permitRequired: 'Varies by town; local approval is common', ownerOccupancyRequired: 'No countywide rule found', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Town-level zoning restrictions are common', regulations: ['Local rules tend to favor tighter oversight and permit controls.', 'Buyer should confirm whether the property is in a municipality that limits short-term rentals.', 'Check for minimum-stay, occupancy, or nuisance rules that can affect yield.'] },
  '36103': { name: 'Suffolk', score: 0.81, tier: 'High', permitRequired: 'Varies by town; local approval is common', ownerOccupancyRequired: 'No countywide rule found', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Town-level zoning restrictions are common', regulations: ['Expect a mix of local permit rules and neighborhood restrictions.', 'Short-term stays may be limited by specific town-level policy.', 'Review town code before treating a property as a straightforward STR investment.'] },
  '36119': { name: 'Westchester', score: 0.78, tier: 'High', permitRequired: 'Varies by municipality; local review is common', ownerOccupancyRequired: 'Varies by town', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Town and zoning rules often matter more than countywide law', regulations: ['County and town rules can be strict around transient occupancy.', 'Host registration and local review processes are common.', 'Confirm whether the municipality requires a permit or imposes other operating limits.'] },
  '36111': { name: 'Ulster', score: 0.71, tier: 'High', permitRequired: 'Varies by town; local approval may be required', ownerOccupancyRequired: 'No countywide rule found', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Town-level zoning and use restrictions may apply', regulations: ['Local rules are more structured than in the light-regulation upstate regions.', 'Check town code and any zoning overlays before purchase.', 'Verify whether the municipality restricts rental duration or occupancy.'] },
  '36093': { name: 'Sullivan', score: 0.67, tier: 'High', permitRequired: 'Varies by town', ownerOccupancyRequired: 'No countywide rule found', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Town-level rules may matter', regulations: ['The market remains more regulated than many upstate counties.', 'Town-level requirements can affect your ability to operate as a short-term rental.', 'Review local code before underwriting.'] },
  '36021': { name: 'Columbia', score: 0.61, tier: 'High', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Local restrictions are not uniformly codified.', 'A buyer should verify town rules before relying on STR income.', 'Municipal enforcement and zoning interpretation can still matter.'] },
  '36039': { name: 'Greene', score: 0.58, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Rules are comparatively light, but local enforcement should still be checked.', 'Short-term rental use may be viable if zoning and use rules allow it.', 'Verify the exact town-level expectations before closing.'] },
  '36091': { name: 'Saratoga', score: 0.54, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['The area is often more permissive than downstate markets.', 'Municipal awareness still matters, especially around zoning and event use.', 'Confirm the exact local standard before underwriting.'] },
  '36105': { name: 'Warren', score: 0.50, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Lake George-area rules can be more restrictive than surrounding communities.', 'Town and waterfront rules can affect rental operations.', 'Verify local law before relying on a short-term rental business plan.'] },
  '36109': { name: 'Tompkins', score: 0.47, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Rules are often lighter than in the metro corridor.', 'Local zoning still matters for property-level feasibility.', 'Check municipal permitting before assuming a simple STR path.'] },
  '36029': { name: 'Erie', score: 0.44, tier: 'Moderate', permitRequired: 'Yes — Erie County occupancy-tax rules and local registration can apply', ownerOccupancyRequired: 'No countywide rule found', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Buffalo and other municipalities may have local rules', regulations: ['Short-term rental rules are more permissive than downstate, but not uniform.', 'Check city or town-specific requirements before closing.', 'Operational flexibility may depend on parking, occupancy, and nuisance rules.'] },
  '36055': { name: 'Monroe', score: 0.42, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['The market is generally more accessible, but local oversight still matters.', 'Buyer should review zoning and permit details at the municipal level.', 'Some areas may impose limits on the number of nights or use type.'] },
  '36001': { name: 'Albany', score: 0.40, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Rules are generally manageable but still worth reviewing.', 'Local permits and zoning rules can affect the business plan.', 'Confirm the municipality allows the intended rental model.'] },
  '36083': { name: 'Schenectady', score: 0.35, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['The regulatory environment is usually lighter than downstate.', 'Still review local code for zoning and occupancy conditions.', 'A property may be viable, but municipal approval should be confirmed.'] },
  '36063': { name: 'Niagara', score: 0.31, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Most markets are more flexible here than in the metro corridor.', 'Host responsibilities still depend on local ordinances.', 'Check whether the municipality has any transient-occupancy or nuisance rules.'] },
  '36117': { name: 'Wayne', score: 0.28, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['This is a comparatively permissive area for short-term rentals.', 'Expect fewer barriers than in the metro counties.', 'Still review local zoning and property-use restrictions before purchase.'] },
  '36025': { name: 'Delaware', score: 0.27, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['This can be a relatively flexible market for short-term rentals.', 'Local code and homeowner association rules may still matter.', 'Check whether the town treats the use as transient occupancy.'] },
  '36033': { name: 'Franklin', score: 0.25, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['The regulatory burden is usually lower here than in metro counties.', 'Short-term rental use may be feasible with basic local compliance.', 'Review town rules and any HOA or deed restrictions before purchase.'] },
  '36089': { name: 'St. Lawrence', score: 0.24, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Expect a relatively simple approval path in many communities.', 'Local zoning should still be checked to avoid surprises.', 'A strong property-level review matters more than statewide rules.'] },
  '36113': { name: 'Washington', score: 0.22, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['This region is generally more permissive for short-term stays.', 'Local zoning and deed restrictions remain the main risk factors.', 'Confirm the parcel and building are suitable for the intended rental use.'] }
};

const priorityTownData = {
  // Sources: Home Sweet Hudson STR regulation resource, STR ProfitMap, and local summaries for Ulster, Sullivan, and Greene counties.
  '36111': {
    Kingston: { score: 0.82, tier: 'High', permitRequired: 'Yes — city registration, operating license, and planning-board review may be required', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Zoning districts such as C-1/C-2/C-3/O-3/RF-R/RF-H matter', regulations: ['The City of Kingston requires registration and compliance with county hotel-tax obligations.', 'Short-term rentals are limited by zoning districts and may require a special permit.', 'Verify current city licensing and planning-board requirements before purchasing.'] },
    Hurley: { score: 0.74, tier: 'High', permitRequired: 'Yes — STR permit required', ownerOccupancyRequired: 'Yes — only owner-occupied units are permitted', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Principal-residence requirement applies', regulations: ['Hurley is notably stricter than many upstate towns because it limits STRs to owner-occupied principal residences.', 'A permit application is required and the owner-occupancy standard is central to compliance.', 'Review the town’s permit and principal-residence rules before underwriting.'] },
    Marbletown: { score: 0.72, tier: 'High', permitRequired: 'Yes — permit application required', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'Yes — the town may cap permits', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town zoning and local-host rules may apply', regulations: ['Marbletown requires a local host for non-owner-occupied rentals and can cap permits.', 'The town has taken a more structured approach than many rural municipalities.', 'Verify the current local law and permit cap before relying on a rental plan.'] },
    Olive: { score: 0.78, tier: 'High', permitRequired: 'Yes — registration and permit required', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'Yes — non-owner-occupied permits are capped', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town zoning and permit rules apply', regulations: ['Olive has taken a more restrictive stance and has capped non-owner-occupied permits.', 'Expect a permit-based process and local review before operating.', 'Confirm current permit availability and local restrictions before buying.'] },
    Rochester: { score: 0.76, tier: 'High', permitRequired: 'Yes — permit required', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'Yes — new non-owner-occupied permits may be capped', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Accessory-use and zoning-district rules matter', regulations: ['Rochester treats STRs as an accessory use in certain zoning districts, not a free-standing use.', 'Non-owner-occupied rentals may face permit caps and local-host rules.', 'Confirm the parcel is in an allowed zoning district before closing.'] },
    Saugerties: { score: 0.70, tier: 'High', permitRequired: 'Yes — registration required', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'Yes — the town can cap permits', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Local zoning and village boundaries may affect rules', regulations: ['Saugerties requires registration and can cap permits issued.', 'Non-owner-occupied rentals may require a local host.', 'Check whether village boundaries or zoning create extra restrictions.'] },
    Shandaken: { score: 0.80, tier: 'High', permitRequired: 'Yes — permit review required', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'Yes — new non-owner-occupied applications are not being accepted', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Use and permit caps are important', regulations: ['Shandaken has effectively limited new non-owner-occupied applications because the permit cap has been reached.', 'This is one of the more restrictive towns in the county for STR investment.', 'Confirm current permit status before buying or operating.'] },
    Gardiner: { score: 0.68, tier: 'High', permitRequired: 'Yes — permit and licensing process expected', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'Yes — the town has set a license cap', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town-level licensing and zoning controls are pending or active', regulations: ['Gardiner has active licensing and cap discussions and is more structured than lightly regulated towns.', 'Priority may be given to owners already registered with the county.', 'Monitor the town’s current law and permit queue closely.'] },
    Lloyd: { score: 0.74, tier: 'High', permitRequired: 'Yes — special use permit and STR permit required', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'Yes — the town may cap permits', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Accessory-use and special-use restrictions apply', regulations: ['Lloyd generally limits STRs to accessory use on residential parcels and requires a special use permit.', 'The town may also set a cap on the number of STR permits.', 'Confirm zoning and permit requirements before underwriting.'] },
    NewPaltz: { score: 0.69, tier: 'High', permitRequired: 'Yes — registration required', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Local-manager and registration rules may apply', regulations: ['New Paltz requires registration and a local manager for non-owner-occupied rentals.', 'Expect more local oversight than in lightly regulated towns.', 'Check the current municipal approach before relying on a rental strategy.'] },
    Rosendale: { score: 0.46, tier: 'Moderate', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'No known town-level STR law found', regulations: ['Rosendale has no widely cited town-level STR ordinance in the sources reviewed.', 'County and state rules still apply, but the municipal framework appears lighter.', 'Confirm current town code and enforcement before assuming a simple operating model.'] },
    Ulster: { score: 0.48, tier: 'Moderate', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'No known town-level STR law found', regulations: ['The Town of Ulster does not appear to have a widely cited town-specific STR ordinance in the sources reviewed.', 'County and state compliance is still important.', 'Verify current local rules before relying on short-term rental income.'] },
    Wawarsing: { score: 0.50, tier: 'Moderate', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'No local ordinance found — county/state rules apply', regulations: ['Wawarsing has no known current ordinance in the sources reviewed, but potential regulation is noted.', 'This is a watch-list market rather than a clearly codified one.', 'Monitor local updates before closing or launching a rental.'] },
    Woodstock: { score: 0.84, tier: 'High', permitRequired: 'Yes — permit applications are currently closed to new permits', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'Yes — the permit cap has been reached', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town zoning and permit limits matter', regulations: ['Woodstock has effectively stopped new non-owner-occupied permits after reaching a permit cap.', 'The town is one of the more restrictive STR markets in Ulster County.', 'Check status of permit availability and local host requirements before buying.'] },
    Plattekill: { score: 0.47, tier: 'Moderate', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'No known town-level STR law found', regulations: ['Plattekill did not have a clearly documented town-specific STR framework in the sources reviewed.', 'County and state taxes and zoning still matter.', 'Confirm current local code before assuming a simple STR business plan.'] },
    Shawangunk: { score: 0.52, tier: 'Moderate', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Proposed regulation did not pass', regulations: ['Shawangunk has seen proposed regulation but not an adopted town-level framework in the sources reviewed.', 'This remains a market to monitor for future local rule changes.', 'Review current town action before relying on STR demand.'] },
    Hardenburg: { score: 0.45, tier: 'Moderate', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'No known town-level STR law found', regulations: ['Hardenburg did not have a clearly documented town-specific STR framework in the sources reviewed.', 'County and state rules still apply.', 'Confirm current municipal code before closing.'] }
  },
  '36093': {
    Thompson: { score: 0.66, tier: 'High', permitRequired: 'Yes — local review and permit expectations should be checked', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town zoning and local restrictions may apply', regulations: ['Thompson is one of the more active Sullivan County towns for STR demand and should be reviewed carefully.', 'Check whether local zoning or permit requirements narrow the operating model.', 'A local review is important before relying on short-term rental income.'] },
    Bethel: { score: 0.60, tier: 'High', permitRequired: 'Yes — permit and local compliance should be verified', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town-level rules may apply', regulations: ['Bethel does not have a fully codified local STR framework in the sources reviewed, but permit and compliance requirements should still be checked.', 'County occupancy-tax registration and local safety rules may still apply.', 'Verify current town guidance before buying.'] },
    Liberty: { score: 0.58, tier: 'Moderate', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town zoning should still be checked', regulations: ['Liberty appears more permissive than the stricter Hudson Valley towns, but local zoning still matters.', 'Confirm whether the parcel and building support short-term rental use.', 'Review local code before relying on income projections.'] },
    Fallsburg: { score: 0.62, tier: 'High', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town zoning and local restrictions may apply', regulations: ['Fallsburg is a more active market so local zoning and occupancy expectations should be confirmed.', 'Town-level requirements can affect the ability to operate a short-term rental.', 'Review current local guidance before underwriting.'] }
  },
  '36039': {
    Catskill: { score: 0.64, tier: 'High', permitRequired: 'Yes — STR permit required', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town-level permit and zoning requirements matter', regulations: ['Catskill has a documented STR permit process and is more structured than the most permissive towns.', 'Review the municipality’s permit and zoning posture before purchasing.', 'Confirm the parcel is in a zone that supports this use.'] },
    Hunter: { score: 0.58, tier: 'Moderate', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town-specific zoning should be checked', regulations: ['Hunter is part of the broader Greene County STR landscape and should be reviewed at the local level.', 'The town is not as clearly codified as Catskill in the sources reviewed.', 'Check zoning and municipal guidance before relying on STR projections.'] }
  },
  '36105': {
    'Lake George': { score: 0.58, tier: 'Moderate', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Waterfront and district rules may matter', regulations: ['The village and waterfront context can create more oversight than surrounding towns.', 'Check zoning, parking, and waterfront restrictions before buying.', 'Review local rules around short stays and occupancy.'] },
    Bolton: { score: 0.54, tier: 'Moderate', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town zoning and use rules should be checked', regulations: ['This market is often more permissive than the busiest tourist centers.', 'Still review local zoning and any waterfront restrictions.', 'Check whether the parcel is suitable for the intended rental model.'] },
    Queensbury: { score: 0.51, tier: 'Moderate', permitRequired: 'No local ordinance found — county/state rules apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Town zoning and use rules should be checked', regulations: ['The town is generally feasible but expectations can vary by district.', 'Review local property-use rules before closing.', 'Verify that the municipality supports short stays on the parcel.'] }
  },
  '36103': {
    Southampton: { score: 0.74, tier: 'High', permitRequired: 'Yes — town-level review and local controls may apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'High scrutiny around use, parking, and occupancy', regulations: ['The town is more restrictive than many upstate markets.', 'Review local zoning and transient-occupancy rules before underwriting.', 'Expect stronger scrutiny around neighborhood impacts and parking.'] },
    'East Hampton': { score: 0.76, tier: 'High', permitRequired: 'Yes — town-level review and local controls may apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'High scrutiny around use, parking, and occupancy', regulations: ['The town is a high-regulation market with strong local controls.', 'Confirm whether local code limits rentals by district or dwelling type.', 'Review town rules before relying on rental income.'] },
    Southold: { score: 0.71, tier: 'High', permitRequired: 'Yes — town-level review and local controls may apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'High scrutiny around use, parking, and occupancy', regulations: ['Local rules can be restrictive for short stays in this market.', 'Check whether the parcel is in a district where temporary rentals are constrained.', 'Review town-level use rules before purchase.'] }
  },
  '36119': {
    Greenburgh: { score: 0.74, tier: 'High', permitRequired: 'Yes — town-level review and local controls may apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Municipal zoning and occupancy rules may apply', regulations: ['The town is more regulated than many upstate localities.', 'Review local code, occupancy, and nuisance expectations before buying.', 'At a minimum, verify whether the municipality allows the intended rental model.'] },
    'Mount Pleasant': { score: 0.72, tier: 'High', permitRequired: 'Yes — town-level review and local controls may apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Municipal zoning and occupancy rules may apply', regulations: ['Expect an above-average level of local attention around short stays.', 'Check whether the parcel is in a district with tighter rules.', 'Review town and zoning language before underwriting.'] },
    Ossining: { score: 0.70, tier: 'High', permitRequired: 'Yes — town-level review and local controls may apply', ownerOccupancyRequired: 'No local ordinance found — county/state rules apply', nightCap: 'No local ordinance found — county/state rules apply', minimumStay: 'No local ordinance found — county/state rules apply', zoningRestrictions: 'Municipal zoning and occupancy rules may apply', regulations: ['Local controls can materially affect your operating model.', 'Buyer diligence should include review of zoning and any local permit requirements.', 'Confirm that the use is consistent with the parcel and building.'] }
  }
};

const details = document.getElementById('details');
const map = L.map('map').setView([42.9, -75.5], 7);
const tooltip = L.DomUtil.create('div', 'county-tooltip');
const backButton = document.createElement('button');
backButton.className = 'map-breadcrumb';
backButton.textContent = '← Back to NY State';
backButton.style.display = 'none';
backButton.addEventListener('click', () => {
  if (townLayer) {
    map.removeLayer(townLayer);
  }
  townLayer = null;
  backButton.style.display = 'none';
  if (countyLayer) {
    map.fitBounds(countyLayer.getBounds());
  }
  details.innerHTML = '<p>Click a county to drill down into its towns and municipalities.</p>';
});
map.getContainer().appendChild(backButton);
tooltip.style.display = 'none';
map.getContainer().appendChild(tooltip);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let countyLayer;
let townLayer;
let townGeojsonCache;

async function loadLocalTownGeojson() {
  const response = await fetch('src/data/priority-town-polygons.geojson');
  if (!response.ok) {
    throw new Error(`Unable to load local town data: ${response.status}`);
  }
  return response.json();
}

function colorForScore(score) {
  const [r1, g1, b1] = [220, 38, 38];
  const [r2, g2, b2] = [255, 215, 0];
  const [r3, g3, b3] = [22, 163, 74];
  const mix = Math.max(0, Math.min(1, score));

  if (mix <= 0.5) {
    const blend = mix / 0.5;
    return `rgb(${Math.round(r1 + (r2 - r1) * blend)}, ${Math.round(g1 + (g2 - g1) * blend)}, ${Math.round(b1 + (b2 - b1) * blend)})`;
  }

  const blend = (mix - 0.5) / 0.5;
  return `rgb(${Math.round(r2 + (r3 - r2) * blend)}, ${Math.round(g2 + (g3 - g2) * blend)}, ${Math.round(b2 + (b3 - b2) * blend)})`;
}

function getTier(score) {
  if (score >= 0.8) return 'Very High';
  if (score >= 0.6) return 'High';
  if (score >= 0.4) return 'Moderate';
  return 'Low';
}

function describeScore(score) {
  if (score >= 0.8) return 'Very restrictive rules, often with strict permitting and local caps.';
  if (score >= 0.6) return 'Moderately restrictive, with notable local limits and review processes.';
  if (score >= 0.4) return 'Mixed approach with some local limits but more room for operation.';
  return 'Generally more permissive, with fewer barriers to short-term rentals.';
}

function defaultRulesForScore(score) {
  if (score >= 0.8) {
    return [
      'Expect strong local permit and registration requirements.',
      'Owner-occupancy or use restrictions may apply.',
      'Check neighborhood and zoning language early.'
    ];
  }
  if (score >= 0.6) {
    return [
      'Local oversight is meaningful and should be reviewed thoroughly.',
      'Permits and bedroom or occupancy limits may apply.',
      'Verify the municipality’s rules before relying on rental income.'
    ];
  }
  if (score >= 0.4) {
    return [
      'The county is usually more open to short-term rentals.',
      'Municipal zoning and nuisance rules still matter.',
      'Confirm the exact town rules before making a purchase decision.'
    ];
  }
  return [
    'This market is comparatively permissive for short-term rentals.',
    'Local zoning and HOA restrictions may still shape the operation.',
    'Confirm that the parcel and building support the intended use.'
  ];
}

function getCountyName(feature) {
  const props = feature.properties || {};
  return props.name || props.NAME || props.COUNTYNAME || props.County || 'County';
}

function getCountyMetadata(feature) {
  const fips = String(feature.id);
  const entry = countyData[fips];
  if (entry) {
    return {
      name: entry.name,
      score: entry.score,
      tier: entry.tier || getTier(entry.score),
      permitRequired: entry.permitRequired,
      ownerOccupancyRequired: entry.ownerOccupancyRequired,
      nightCap: entry.nightCap,
      minimumStay: entry.minimumStay,
      zoningRestrictions: entry.zoningRestrictions,
      regulations: entry.regulations || defaultRulesForScore(entry.score)
    };
  }

  const score = 0.2;
  return {
    name: getCountyName(feature),
    score,
    tier: 'Low',
    permitRequired: 'None known',
    ownerOccupancyRequired: 'No',
    nightCap: 'None known',
    minimumStay: 'None known',
    zoningRestrictions: 'No local ordinance — state law applies',
    regulations: defaultRulesForScore(score)
  };
}

function normalizeName(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function getTownMetadata(countyFips, townName) {
  const townLookup = priorityTownData[countyFips];
  if (townLookup) {
    const matched = Object.entries(townLookup).find(([name]) => normalizeName(name) === normalizeName(townName));
    if (matched) {
      const [name, data] = matched;
      return { ...data, name };
    }
  }

  if (priorityTownData[countyFips]) {
    return {
      name: townName,
      score: 0.2,
      tier: 'Low',
      permitRequired: 'No local ordinance — county/state rules apply',
      ownerOccupancyRequired: 'No local ordinance — county/state rules apply',
      nightCap: 'No local ordinance — county/state rules apply',
      minimumStay: 'No local ordinance — county/state rules apply',
      zoningRestrictions: 'No local ordinance — county/state rules apply',
      regulations: ['No town-level ordinance found for this municipality.', 'County and state rules still apply.']
    };
  }

  return {
    name: townName,
    score: 0.2,
    tier: 'Low',
    permitRequired: 'No local ordinance — county/state rules apply',
    ownerOccupancyRequired: 'No local ordinance — county/state rules apply',
    nightCap: 'No local ordinance — county/state rules apply',
    minimumStay: 'No local ordinance — county/state rules apply',
    zoningRestrictions: 'No local ordinance — county/state rules apply',
    regulations: ['Town-level data coming soon — see county overview.']
  };
}

function renderCountyDetails(metadata) {
  details.innerHTML = `
    <h2>${metadata.name}</h2>
    <p><strong>Stringency score:</strong> ${Math.round(metadata.score * 100)}/100</p>
    <p>${describeScore(metadata.score)}</p>
    <h3>Key buyer considerations</h3>
    <ul>
      ${metadata.regulations.map((rule) => `<li>${rule}</li>`).join('')}
    </ul>
  `;
}

function createTooltipContent(metadata) {
  const tierClass = metadata.tier.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const footerText = metadata.regulations && metadata.regulations.includes('Town-level data coming soon — see county overview.')
    ? 'Town-level data coming soon — see county overview.'
    : 'Verify with local authorities before purchasing';

  return `
    <div class="tooltip-header">
      <strong>${metadata.name}</strong>
      <span class="tooltip-badge tier-${tierClass}">${metadata.tier}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Permit Required</span>
      <span class="tooltip-value">${metadata.permitRequired}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Owner-Occupancy Required</span>
      <span class="tooltip-value">${metadata.ownerOccupancyRequired}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Night/Day Cap</span>
      <span class="tooltip-value">${metadata.nightCap}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Minimum Stay</span>
      <span class="tooltip-value">${metadata.minimumStay}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Zoning Restrictions</span>
      <span class="tooltip-value">${metadata.zoningRestrictions}</span>
    </div>
    <div class="tooltip-footer">${footerText}</div>
  `;
}

function positionTooltip(event, targetTooltip) {
  const size = map.getSize();
  const tooltipWidth = Math.min(300, size.x - 24);
  const tooltipHeight = targetTooltip.offsetHeight || 220;
  let left = event.containerPoint.x + 14;
  let top = event.containerPoint.y + 14;

  if (left + tooltipWidth > size.x - 12) {
    left = event.containerPoint.x - tooltipWidth - 14;
  }
  if (left < 12) {
    left = 12;
  }
  if (top + tooltipHeight > size.y - 12) {
    top = event.containerPoint.y - tooltipHeight - 14;
  }
  if (top < 12) {
    top = 12;
  }

  targetTooltip.style.maxWidth = `${tooltipWidth}px`;
  targetTooltip.style.left = `${left}px`;
  targetTooltip.style.top = `${top}px`;
}

function attachTooltipHandlers(layer, metadata) {
  layer.on('mouseover', (event) => {
    tooltip.innerHTML = createTooltipContent(metadata);
    tooltip.style.display = 'block';
    positionTooltip(event, tooltip);
  });
  layer.on('mousemove', (event) => {
    positionTooltip(event, tooltip);
  });
  layer.on('mouseout', () => {
    tooltip.style.display = 'none';
  });
}

async function loadTownLayerForCounty(countyFips, countyFeature) {
  if (townLayer) {
    map.removeLayer(townLayer);
    townLayer = null;
  }

  const countyMetadata = getCountyMetadata(countyFeature);
  renderCountyDetails(countyMetadata);
  details.innerHTML += '<p>Loading town-level polygons…</p>';
  backButton.style.display = 'block';

  if (!townGeojsonCache) {
    townGeojsonCache = await loadLocalTownGeojson();
  }

  const townFeatures = (townGeojsonCache.features || []).filter((feature) => {
    const props = feature.properties || {};
    return String(props.countyFips || props.COUNTYFP || '') === String(countyFips);
  });

  townLayer = L.geoJSON(townFeatures, {
    style: (feature) => {
      const { score } = getTownMetadata(countyFips, feature.properties?.NAME || feature.properties?.NAMELSAD || 'Town');
      return {
        color: '#2d3748',
        weight: 0.8,
        fillColor: colorForScore(score),
        fillOpacity: 0.8
      };
    },
    onEachFeature: (feature, layer) => {
      const metadata = getTownMetadata(countyFips, feature.properties?.NAME || feature.properties?.NAMELSAD || 'Town');
      const townName = metadata.name;
      const townMetadata = { ...metadata, name: townName };
      attachTooltipHandlers(layer, townMetadata);
      layer.on('click', (event) => {
        event.originalEvent.stopPropagation();
      });
    }
  }).addTo(map);

  if (townFeatures.length) {
    map.fitBounds(townLayer.getBounds());
  }

  details.innerHTML = `
    <h2>${countyMetadata.name}</h2>
    <p><strong>Stringency score:</strong> ${Math.round(countyMetadata.score * 100)}/100</p>
    <p>Click a town polygon to review local-level STR considerations. Town-level data is pre-populated for priority counties and otherwise shows a coming-soon note.</p>
  `;
}

async function loadNewYorkCounties() {
  const response = await fetch('https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json');
  const geojson = await response.json();

  const nyFeatures = geojson.features.filter((feature) => String(feature.id).startsWith('36'));

  countyLayer = L.geoJSON(nyFeatures, {
    style: (feature) => {
      const { score } = getCountyMetadata(feature);
      return {
        color: '#2d3748',
        weight: 1,
        fillColor: colorForScore(score),
        fillOpacity: 0.8
      };
    },
    onEachFeature: (feature, layer) => {
      const metadata = getCountyMetadata(feature);
      layer.on('mouseover', (event) => {
        renderCountyDetails(metadata);
        tooltip.innerHTML = createTooltipContent(metadata);
        tooltip.style.display = 'block';
        positionTooltip(event, tooltip);
      });
      layer.on('mousemove', (event) => {
        positionTooltip(event, tooltip);
      });
      layer.on('focus', () => renderCountyDetails(metadata));
      layer.on('click', async (event) => {
        event.originalEvent.stopPropagation();
        const countyFips = String(feature.id);
        const selectedCountyName = getCountyName(feature);
        const countyMetadata = getCountyMetadata(feature);
        renderCountyDetails(countyMetadata);
        details.innerHTML += `<p>Loading town polygons for ${selectedCountyName}…</p>`;
        try {
          await loadTownLayerForCounty(countyFips, feature);
        } catch (error) {
          console.error('Unable to load municipality polygons', error);
          details.innerHTML = `
            <h2>${countyMetadata.name}</h2>
            <p>We could not load town polygons for this county right now. Please try again later.</p>
          `;
        }
      });
      layer.on('mouseout', () => {
        tooltip.style.display = 'none';
      });
    }
  }).addTo(map);

  map.fitBounds(countyLayer.getBounds());
  details.innerHTML = '<p>Click a county to drill down into its towns and municipalities.</p>';
}

loadNewYorkCounties().catch((error) => {
  console.error('Unable to load county geography', error);
  details.innerHTML = '<p>We could not load the county shapes right now. Please try again later.</p>';
});
