import {
  _ as i,
  o as n,
  c as o,
  t as c,
  b as a,
  e as p,
  a as d,
  d as t,
  p as m,
  f as h,
} from "./app.9b460b2f.js";
var v = "/mendix/Login.png",
  g = "/mendix/Registration.png",
  u = "/mendix/Similarity-search-01.png",
  b = "/mendix/Similarity-search-02.png",
  y = "/mendix/Similarity-search-03.png",
  _ = "/mendix/Filters-01.png",
  f = "/mendix/Filters-02.jpg",
  w = "/mendix/Filters-03.png",
  x = "/mendix/Filters-04.png",
  S = "/mendix/Detailed-view-component.png",
  A = "/mendix/Add-similarity-suggestion.png",
  T = "/mendix/Select-component-type.png",
  k = "/mendix/Add-component-01.png",
  C = "/mendix/Add-component-02.png",
  I = "/mendix/Added-components.png";
const D = { class: "button-key" },
  O = {
    props: { k: String },
    setup(e) {
      return (s, l) => (n(), o("span", D, c(e.k), 1));
    },
  };
var N = i(O, [["__scopeId", "data-v-ecb5efa4"]]);
const r = (e) => (m("data-v-0ce25052"), (e = e()), h(), e),
  F = d(
    '<h1 id="showcase" tabindex="-1" data-v-0ce25052>Showcase <a class="header-anchor" href="#showcase" aria-hidden="true" data-v-0ce25052>#</a></h1><hr data-v-0ce25052><h4 id="content" tabindex="-1" data-v-0ce25052>Content <a class="header-anchor" href="#content" aria-hidden="true" data-v-0ce25052>#</a></h4><p data-v-0ce25052><div class="table-of-contents" data-v-0ce25052><ul data-v-0ce25052><li data-v-0ce25052><a href="#demo-video" data-v-0ce25052>Demo Video</a></li><li data-v-0ce25052><a href="#login" data-v-0ce25052>Login</a></li><li data-v-0ce25052><a href="#registration" data-v-0ce25052>Registration</a></li><li data-v-0ce25052><a href="#similarity-search" data-v-0ce25052>Similarity Search</a><ul data-v-0ce25052><li data-v-0ce25052><a href="#apply-filters" data-v-0ce25052>Apply Filters</a></li><li data-v-0ce25052><a href="#show-all-attributes" data-v-0ce25052>Show All Attributes</a></li><li data-v-0ce25052><a href="#add-similarity-suggestion" data-v-0ce25052>Add Similarity Suggestion</a></li><li data-v-0ce25052><a href="#add-new-component-select-component-type" data-v-0ce25052>Add New Component (Select Component Type)</a></li><li data-v-0ce25052><a href="#add-new-component" data-v-0ce25052>Add New Component</a></li></ul></li><li data-v-0ce25052><a href="#added-component-page" data-v-0ce25052>Added Component Page</a></li></ul></div></p><hr data-v-0ce25052><blockquote data-v-0ce25052><p data-v-0ce25052>For the user documentation go to: <a href="https://github.com/amosproj/amos2021ws06-exp-similarity-detector/tree/main/Deliverables/2022-02-09_sprint-13-user-documentation.pdf" target="_blank" rel="noopener noreferrer" data-v-0ce25052>Explainable Similarity Detector - User Documentation</a></p></blockquote><h2 id="demo-video" tabindex="-1" data-v-0ce25052>Demo Video <a class="header-anchor" href="#demo-video" aria-hidden="true" data-v-0ce25052>#</a></h2><video width="100%" poster="https://raw.githubusercontent.com/amosproj/amos2021ws06-exp-similarity-detector/update-docs/images/Video.jpg" controls data-v-0ce25052><source src="https://user-images.githubusercontent.com/38668040/154354706-a872a359-7d0e-4294-9aa7-3ad88ba600e3.mp4" type="video/mp4" data-v-0ce25052> Your browser does not support the video tag. </video><p data-v-0ce25052><a href="https://user-images.githubusercontent.com/38668040/154354706-a872a359-7d0e-4294-9aa7-3ad88ba600e3.mp4" target="_blank" rel="noopener noreferrer" data-v-0ce25052>Download video from GitHub</a></p><h2 id="login" tabindex="-1" data-v-0ce25052>Login <a class="header-anchor" href="#login" aria-hidden="true" data-v-0ce25052>#</a></h2><p data-v-0ce25052>At the login page you can either login with your existing credentials, then you can land on the <a href="#similarity-call" data-v-0ce25052>Similarity Search</a> page or you can register with new credentials and land on the <a href="#registration" data-v-0ce25052>Registration</a> page.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Login.png" style="margin-top:500px;" data-v-0ce25052><img src="' +
      v +
      '" alt="Login" data-v-0ce25052></a></p><h2 id="registration" tabindex="-1" data-v-0ce25052>Registration <a class="header-anchor" href="#registration" aria-hidden="true" data-v-0ce25052>#</a></h2><p data-v-0ce25052>Here you can register with new login data. You can either sign up as user with the button <span class="mendix-button" data-v-0ce25052>Register As User</span> or as admin with the button <span class="mendix-button" data-v-0ce25052>Register As Admin</span>. Now you can go back to the <a href="#login" data-v-0ce25052>Login</a> page and log in with the new credentials.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Registration.png" style="margin-top:500px;" data-v-0ce25052><img src="' +
      g +
      '" alt="Registration" data-v-0ce25052></a></p><h2 id="similarity-search" tabindex="-1" data-v-0ce25052>Similarity Search <a class="header-anchor" href="#similarity-search" aria-hidden="true" data-v-0ce25052>#</a></h2><p data-v-0ce25052>The <em data-v-0ce25052>Similarity Search</em> page is the main page for the similarity search.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Similarity-search-01.png" style="margin-top:500px;" data-v-0ce25052><img alt="Similarity search" src="' +
      u +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><p data-v-0ce25052>To do a similarity search follow the steps below:</p><ol data-v-0ce25052><li data-v-0ce25052>Select the desired component type from the dropdown field <em data-v-0ce25052>Component Type</em>. In this example <code data-v-0ce25052>Capacitors</code>.</li><li data-v-0ce25052>To search for a specific component name enter the name or a substring in the <em data-v-0ce25052>Component Name</em> field. To get suggestions for all available names leave the field empty and click directly on the <span class="mendix-button" data-v-0ce25052>\u25B7 Start Similarity Search</span> button. In this example we searched for <code data-v-0ce25052>_2</code> which returns all names that contain the substring <code data-v-0ce25052>_2</code>.</li><li data-v-0ce25052>In the popup you can select the name of the component with the <span class="mendix-button" data-v-0ce25052>Use</span> button. You can load further suggestions if you click on the <em data-v-0ce25052>Load more...</em> button. In this example we selected the component name <code data-v-0ce25052>Capacitor_23</code>.</li></ol><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Similarity-search-02.png" style="margin-top:500px;" data-v-0ce25052><img alt="Similarity search 2" src="' +
      b +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><p data-v-0ce25052>To start the similarity search click on the <span class="mendix-button" data-v-0ce25052>\u25B7 Start Similarity Search</span> button.<br data-v-0ce25052> The results found are then displayed in the <em data-v-0ce25052>Search Results</em> table below.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Similarity-search-03.png" style="margin-top:500px;" data-v-0ce25052><img alt="Similarity search 3" src="' +
      y +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><p data-v-0ce25052>The left column (<em data-v-0ce25052>Component IDs</em>) contains the IDs of the component.<br data-v-0ce25052> The similarity type column contains the similarity types sorted in descending order by the degree of similarity. The following table shows the similarity degree sorted in descending order where A/Upgrade has the highest degree and C the lowest:</p><ul data-v-0ce25052><li data-v-0ce25052>A/Upgrade</li><li data-v-0ce25052>A</li><li data-v-0ce25052>A/Downgrade</li><li data-v-0ce25052>B/Upgrade</li><li data-v-0ce25052>B</li><li data-v-0ce25052>B/Downgrade</li><li data-v-0ce25052>C</li></ul><p data-v-0ce25052>The third column <em data-v-0ce25052>Difference In</em> lists the differences between the two components.</p><p data-v-0ce25052>On the righthand side there are three buttons.</p><ul data-v-0ce25052><li data-v-0ce25052>Info button: Show all attributes for this component (see: <a href="#show-all-attributes" data-v-0ce25052>Show All Attributes</a>)</li><li data-v-0ce25052>PDF button: Show manufacturer data sheet</li><li data-v-0ce25052>Edit button: Edit similarity type or comment (No functionality stored for this button at this time)</li></ul><h3 id="apply-filters" tabindex="-1" data-v-0ce25052>Apply Filters <a class="header-anchor" href="#apply-filters" aria-hidden="true" data-v-0ce25052>#</a></h3><ol data-v-0ce25052><li data-v-0ce25052>To apply filters you add first an attribute to the <em data-v-0ce25052>Attribute</em> field. In the <a href="#attribute" data-v-0ce25052>Attribute</a> section it is explained in more detail.</li><li data-v-0ce25052>Select the comparison operator in the <em data-v-0ce25052>Operator</em> dropdown.</li><li data-v-0ce25052>Enter a value in the <em data-v-0ce25052>Value</em> field.</li></ol><p data-v-0ce25052>If you are fine with the filter you can click on the <span class="mendix-button" style="font-size:1.2em;padding-left:10px;padding-right:10px;" data-v-0ce25052>+</span> button.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Filters-01.png" style="margin-top:500px;" data-v-0ce25052><img alt="Filters 1" src="' +
      _ +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><h4 id="attribute" tabindex="-1" data-v-0ce25052>Attribute <a class="header-anchor" href="#attribute" aria-hidden="true" data-v-0ce25052>#</a></h4>',
    33
  ),
  R = t(""),
  V = r(() => a("code", null, "he", -1)),
  P = t(" it complete it to "),
  L = r(() => a("code", null, "height", -1)),
  B = t(" if you use the "),
  U = t(" key."),
  j = d(
    '<p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Filters-02.jpg" style="margin-top:500px;" data-v-0ce25052><img alt="Filters 2" src="' +
      f +
      '" width="20%" style="margin-bottom:1em;display:block;margin-left:auto;margin-right:auto;" data-v-0ce25052></a></p><p data-v-0ce25052>Now your added filters are applied and saved in the <em data-v-0ce25052>Currently added filters</em> list. On the top left you can see, that 1 filter was applied.<br data-v-0ce25052> On the right you can edit or delete individual filters.<br data-v-0ce25052> You can also remove all filters with the <span class="mendix-button" data-v-0ce25052>Remove all filters</span> button.</p><p data-v-0ce25052>If all filters you want are applied click on the <span class="mendix-button" data-v-0ce25052>\u25B7 Start Similarity Search</span> button to start the similarity search with the applied filters.<br data-v-0ce25052> In this case, all components similar to <code data-v-0ce25052>Capacitor_23</code> are searched that have a <code data-v-0ce25052>height &gt; 2</code>.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Filters-03.png" style="margin-top:500px;" data-v-0ce25052><img alt="Filters 3" src="' +
      w +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><p data-v-0ce25052>The output of the similarity search is displayed in the table below:</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Filters-04.png" style="margin-top:500px;" data-v-0ce25052><img alt="Filters 4" src="' +
      x +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><p data-v-0ce25052>You can see more information for the request in the collapsible <em data-v-0ce25052>Properties</em> section.<br data-v-0ce25052> For example that it took 1.16 seconds to perform the similarity request. Also the used request URL is displayed: <a href="https://apim-similarity-detector.azure-api.net/v1/componentTypes/resistors/21/similarities/?differenceInAsString=true&amp;ordering=type" target="_blank" rel="noopener noreferrer" data-v-0ce25052>https://apim-similarity-detector.azure-api.net/v1/componentTypes/resistors/21/similarities/?differenceInAsString=true&amp;ordering=type</a>.</p><h3 id="show-all-attributes" tabindex="-1" data-v-0ce25052>Show All Attributes <a class="header-anchor" href="#show-all-attributes" aria-hidden="true" data-v-0ce25052>#</a></h3><p data-v-0ce25052>With a click on the <span class="mendix-button" style="padding-left:10px;padding-right:10px;" data-v-0ce25052>i</span> button you can see all available attributes for the actual component compared with the similar component in the <em data-v-0ce25052>Detailed View Component</em> popup.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Detailed-view-component.png" style="margin-top:500px;" data-v-0ce25052><img alt="Detailed view component" src="' +
      S +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><p data-v-0ce25052>In the left column is the name of the attribute.<br data-v-0ce25052> The column in the middle <em data-v-0ce25052>Component 1</em> is the capacitor you searched for (in this example <code data-v-0ce25052>Capacitor_23</code>). The right column <em data-v-0ce25052>Component 2</em> is the similar component in the list that is compared to the <em data-v-0ce25052>Component 1</em>.</p><h3 id="add-similarity-suggestion" tabindex="-1" data-v-0ce25052>Add Similarity Suggestion <a class="header-anchor" href="#add-similarity-suggestion" aria-hidden="true" data-v-0ce25052>#</a></h3><p data-v-0ce25052>To add a missing similarity suggestion for existing components or edit existing suggestions you can use the <span class="mendix-button" data-v-0ce25052>Suggest Similar Component</span> button. It opens the <em data-v-0ce25052>Add Match to component Database</em> popup.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Add-similarity-suggestion.png" style="margin-top:500px;" data-v-0ce25052><img alt="Add Similarity Suggestion" src="' +
      A +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><h3 id="add-new-component-select-component-type" tabindex="-1" data-v-0ce25052>Add New Component (Select Component Type) <a class="header-anchor" href="#add-new-component-select-component-type" aria-hidden="true" data-v-0ce25052>#</a></h3><p data-v-0ce25052>To add a complete new component click on the <span class="mendix-button" data-v-0ce25052>Add New Component</span> button. It opens the <em data-v-0ce25052>Select Component Type</em> popup where you can select the type of the component you want to add. Click then on the <span class="mendix-button" data-v-0ce25052>\u2713 Go</span> button. Now it opens the <a href="#add-new-component" data-v-0ce25052>Add New Component</a> popup.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Select-component-type.png" style="margin-top:500px;" data-v-0ce25052><img alt="Select component type" src="' +
      T +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><h3 id="add-new-component" tabindex="-1" data-v-0ce25052>Add New Component <a class="header-anchor" href="#add-new-component" aria-hidden="true" data-v-0ce25052>#</a></h3><p data-v-0ce25052>To add the new component and add a name (required) and the other optional attributes. When you are done click on the <span class="mendix-button" data-v-0ce25052>Save</span> button.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Add-component-01.png" style="margin-top:500px;" data-v-0ce25052><img alt="Add component 1" src="' +
      k +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><p data-v-0ce25052>The added component will saved in the Mendix Database. If the Admin approves it on the <em data-v-0ce25052>Added Components</em> page it will be send to the real database. This ensures that only valid data will be send to the real database.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Add-component-02.png" style="margin-top:500px;" data-v-0ce25052><img alt="Add component 2" src="' +
      C +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><h2 id="added-component-page" tabindex="-1" data-v-0ce25052>Added Component Page <a class="header-anchor" href="#added-component-page" aria-hidden="true" data-v-0ce25052>#</a></h2><p data-v-0ce25052>The page <em data-v-0ce25052>Added Components</em> shows an overview over the <em data-v-0ce25052>Added Similarities</em> and <em data-v-0ce25052>Added Components</em>.</p><p data-v-0ce25052><a title="Open high resolution image in new tab" target="_blank" href="/mendix/Added-components.png" style="margin-top:500px;" data-v-0ce25052><img alt="Added components" src="' +
      I +
      '" style="margin-bottom:1em;" data-v-0ce25052></a></p><p data-v-0ce25052>Here you can edit delete or send the items to the real database. You can also send all entries in the list to the database with the <span class="mendix-button" data-v-0ce25052>Send all to database</span> button.</p>',
    26
  ),
  z =
    '{"title":"Showcase","description":"","frontmatter":{"sidebarDepth":3},"headers":[{"level":2,"title":"Demo Video","slug":"demo-video"},{"level":2,"title":"Login","slug":"login"},{"level":2,"title":"Registration","slug":"registration"},{"level":2,"title":"Similarity Search","slug":"similarity-search"},{"level":3,"title":"Apply Filters","slug":"apply-filters"},{"level":3,"title":"Show All Attributes","slug":"show-all-attributes"},{"level":3,"title":"Add Similarity Suggestion","slug":"add-similarity-suggestion"},{"level":3,"title":"Add New Component (Select Component Type)","slug":"add-new-component-select-component-type"},{"level":3,"title":"Add New Component","slug":"add-new-component"},{"level":2,"title":"Added Component Page","slug":"added-component-page"}],"relativePath":"guide/frontend/showcase.md","lastUpdated":1644447714413}',
  E = {},
  q = Object.assign(E, {
    setup(e) {
      return (s, l) => (
        n(),
        o("div", null, [
          F,
          a("p", null, [R, V, P, L, B, p(N, { k: "Tab" }), U]),
          j,
        ])
      );
    },
  });
var H = i(q, [["__scopeId", "data-v-0ce25052"]]);
export { z as __pageData, H as default };
