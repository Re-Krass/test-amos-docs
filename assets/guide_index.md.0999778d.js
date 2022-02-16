import{_ as e,c as t,o as a,a as i}from"./app.9b460b2f.js";var o="/AMOS-Banner.svg",r="/similarity-detector-interlaced.png";const g='{"title":"Explainable Similarity Detector Docs","description":"","frontmatter":{"sidebarDepth":4,"title":"Explainable Similarity Detector Docs"},"headers":[{"level":2,"title":"Description","slug":"description"},{"level":2,"title":"Helpful links","slug":"helpful-links"},{"level":2,"title":"Projects","slug":"projects"},{"level":2,"title":"Detailed Description","slug":"detailed-description"},{"level":3,"title":"What was the overall Vision of our Project?","slug":"what-was-the-overall-vision-of-our-project"},{"level":3,"title":"Problem Statement","slug":"problem-statement"},{"level":3,"title":"Solution","slug":"solution"},{"level":3,"title":"Resources","slug":"resources"},{"level":3,"title":"Work Packages","slug":"work-packages"},{"level":3,"title":"How do I benefit from this?","slug":"how-do-i-benefit-from-this"},{"level":3,"title":"Requirements","slug":"requirements"}],"relativePath":"guide/index.md","lastUpdated":1644447714415}',n={},l=i('<p><a title="Amos Banner" target="_blank" href="/AMOS-Banner.svg"><img alt="Banner" src="'+o+'"></a></p><h2 align="center">AMOS WS 2021/2022 - Project 6</h2><h3 align="center">amos2021ws06-exp-similarity-detector</h3><h4 align="center" style="padding-top:5px;">Backend (Azure, Database, Machine Learning)</h4><h4 align="center" style="padding-top:3px;">Industry partner: Siemens AG</h4><hr><h4 id="content" tabindex="-1">Content <a class="header-anchor" href="#content" aria-hidden="true">#</a></h4><p><div class="table-of-contents"><ul><li><a href="#description">Description</a></li><li><a href="#helpful-links">Helpful links</a></li><li><a href="#projects">Projects</a></li><li><a href="#detailed-description">Detailed Description</a><ul><li><a href="#what-was-the-overall-vision-of-our-project">What was the overall Vision of our Project?</a></li><li><a href="#problem-statement">Problem Statement</a></li><li><a href="#solution">Solution</a></li><li><a href="#resources">Resources</a></li><li><a href="#work-packages">Work Packages</a></li><li><a href="#how-do-i-benefit-from-this">How do I benefit from this?</a></li><li><a href="#requirements">Requirements</a></li></ul></li></ul></div></p><hr><blockquote><p>Similarity detector for electronic components on basis of Explainable AI</p></blockquote><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h2><p>The project goal is to develop a web service (frontend + backend) that lets users identify similar electronic components from a database using a machine learning algorithm.</p><p><a title="Open high resolution image in new tab" target="_blank" href="/similarity-detector.PNG"><img src="'+r+'" alt="Project Banner large"></a></p><p><a title="Project Banner large" target="_blank" href="/similarity-detector.PNG"> \u{1F5BC}\uFE0F Open high resolution image in new tab </a></p><hr><h2 id="helpful-links" tabindex="-1">Helpful links <a class="header-anchor" href="#helpful-links" aria-hidden="true">#</a></h2><ul><li>GitHub <ul><li>Public repository: <ul><li><a href="https://github.com/amosproj/amos2021ws06-exp-similarity-detector" target="_blank" rel="noopener noreferrer">https://github.com/amosproj/amos2021ws06-exp-similarity-detector</a></li></ul></li><li>Private repository (Backend): <ul><li><a href="https://github.com/amosproj/amos2021ws06-exp-similarity-detector" target="_blank" rel="noopener noreferrer">https://github.com/amosproj/amos2021ws06-exp-similarity-detector</a></li></ul></li><li>Private repository (Frontend): <ul><li><a href="https://github.com/amosproj/amos2021ws06-exp-similarity-detector" target="_blank" rel="noopener noreferrer">https://github.com/amosproj/amos2021ws06-exp-similarity-detector-frontend</a></li></ul></li></ul></li><li>Webpage (Frontend): <ul><li><a href="https://github.com/amosproj/amos2021ws06-exp-similarity-detector" target="_blank" rel="noopener noreferrer">https://similarity-detector-amos.azurewebsites.net/index.html</a></li></ul></li></ul><h2 id="projects" tabindex="-1">Projects <a class="header-anchor" href="#projects" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/amosproj/amos2021ws06-exp-similarity-detector/projects/1" target="_blank" rel="noopener noreferrer">Similarity Detector Pipeline</a></li></ul><hr><h2 id="detailed-description" tabindex="-1">Detailed Description <a class="header-anchor" href="#detailed-description" aria-hidden="true">#</a></h2><h3 id="what-was-the-overall-vision-of-our-project" tabindex="-1">What was the overall Vision of our Project? <a class="header-anchor" href="#what-was-the-overall-vision-of-our-project" aria-hidden="true">#</a></h3><p>The Explainable Similarity Detector should give all developers who work with electronic components a noticeable simplification in everyday work. Through the use of machine learning and an easily understandable surface, the time-consuming search for suitable components should be faster, more convenient and clearer.</p><h3 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a></h3><p>Siemens AG uses millions of electronic components from various providers. It is not rare that very similar components are ordered from multiple providers which leads to cost inefficiency. The similarity of components is defined through their attributes. Depending on the type of components, the number of attributes can reach several hundreds. Also, the task is complicated by the fact that there is no naming conventions nor granularity standardization that are used by the component providers for describing the components: it is possible that an attribute defined by one provider can correspond to a differently named one or even several attributes defined by a different provider. Manual processing of such data would not only be infeasible due to data volumes but would also involve an enormous mental load assuming that the expert would have to compare all the attributes.</p><h3 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h3><p>We want to provide a simple to use tool that allows an expert not only to detect similar or same components in the data but also reduce the mental load by providing an explanation in natural language of why certain components are similar and to what extent. Such a tool would not only ensure that similar components are found but will also create trust and transparency of the results, a feature that many modern ML tools are lacking. Providing an explanation of similarity will also reduce the mental load from the validation. The tool should be built around the existing deep learning model which we will provide. It should be able to gather feedback and trigger re-training of the model as the new annotations are supplied.</p><h3 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-hidden="true">#</a></h3><p>Siemens AG will provide the current implementation of explainable AI deep learning model in PyTorch. The model was inspired by the state-of-the-art machine translation approaches of neural encoder-decoder architectures and defines the task of explainable similarity detection as a translation task from tabular data into a natural language sentence that generates a text with the degree of similarity and its explanation.</p><h3 id="work-packages" tabindex="-1">Work Packages <a class="header-anchor" href="#work-packages" aria-hidden="true">#</a></h3><h4 id="backend" tabindex="-1">Backend <a class="header-anchor" href="#backend" aria-hidden="true">#</a></h4><p>The model should be integrated and deployed in a backend that will be communicating by a Rest API. It should make sure that it can process pairwise inputs as well as large lists of electronic components. The inference time of the model should be tested and optimized to ensure the optimal trade-off between cost and speed. The best deployment solution should be determined within the project with it potentially being deployed on the AWS with Kubernetes. The deployment should support inference and (re-)training. The backend should be cost-saving which means it should be able to scale automatically depending on the workload which means it should run on smaller instances when the workload is lower and access larger instances for heavy workloads. The backend should be able to compare the components within the list (Figure 1) as well as access a database of all the components and find the similar components among the existing once depending on the user\u2019s preference.</p><h4 id="frontend" tabindex="-1">Frontend <a class="header-anchor" href="#frontend" aria-hidden="true">#</a></h4><p>The frontend should be developed in framework of low-code platform Mendix. The frontend should communicate with the Backend by Rest API and be able to send and receive the data. It should visualize the output of the AI Model and allow the user to correct it. The corrected input should be sent back to the backend and stored for the further re-training of the model. The frontend should have at least following functionality:</p><ol><li>Upload a list of electronic components, list length between 2 and 10000</li><li>Visualize the list in terms of pairwise comparison and the generated similarity annotations</li><li>Create an export of the similarity pairing and automatically generated annotations</li><li>Accept an import of a similarity pairwise comparison and gold standard human annotations to be further sent to the backend (e.g CSV, Excel)</li><li>Allow annotations and feedback communication directly from the frontend</li></ol><h4 id="feedback-pipeline" tabindex="-1">Feedback Pipeline <a class="header-anchor" href="#feedback-pipeline" aria-hidden="true">#</a></h4><p>The user feedback from the frontend should be delivered back to the backend and updating of the model should be triggered. For this the implementation should ensure the following:</p><ol><li>Sanity checks and well-formedness of the annotations (e.g. handling of empty fields, spelling correction etc.)</li><li>The training triggering on the corresponding resources e.g. inference (WP1) will be done for the sake of cost saving on CPUs, however, retraining should be triggered on GPUs.</li><li>Validation of the new model. After the retraining the model should be tested to ensure that the results are not deteriorating due to the poor input data. Which means, the performance should be tested on the test set of the previous version as well as on the new data to ensure that the model does not overfit to the new data.</li><li>If the results are satisfactory, the new model can be put into production. However, there should be versioning of the models and the fallback to the previous model should always be possible.</li></ol><h3 id="how-do-i-benefit-from-this" tabindex="-1">How do I benefit from this? <a class="header-anchor" href="#how-do-i-benefit-from-this" aria-hidden="true">#</a></h3><ul><li>No more tedious searching for documentation</li><li>No more extensive comparisons of properties</li><li>Opportunity to give direct feedback</li><li>Possibility to specify similar components</li><li>Possibility to specify completely new components</li></ul><h3 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-hidden="true">#</a></h3><table><thead><tr><th>Functional</th><th>Non-Functional</th></tr></thead><tbody><tr><td>Identify a component</td><td>Implementation of frontend via Mendix</td></tr><tr><td>Search for similar components</td><td>Backend deployed on Azure</td></tr><tr><td>Save and export search results</td><td>Communication via REST API</td></tr><tr><td>Comment on search results</td><td></td></tr><tr><td>Review user comments</td><td></td></tr><tr><td>Transmit comments to the database</td><td></td></tr></tbody></table>',42),s=[l];function d(h,c,p,u,m,f){return a(),t("div",null,s)}var w=e(n,[["render",d]]);export{g as __pageData,w as default};
