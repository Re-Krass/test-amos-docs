import{_ as e,c as r,o as a,a as t}from"./app.9b460b2f.js";const m='{"title":"Deployment","description":"","frontmatter":{"sidebarDepth":3,"title":"Deployment"},"headers":[{"level":2,"title":"0. Clone Git Repository","slug":"_0-clone-git-repository"},{"level":2,"title":"1. Setup Infrastructure With Terraform","slug":"_1-setup-infrastructure-with-terraform"},{"level":3,"title":"1.1 Install Terraform","slug":"_1-1-install-terraform"},{"level":3,"title":"1.2 Setup Environment Variables","slug":"_1-2-setup-environment-variables"},{"level":3,"title":"1.3 Initialize Terraform Project","slug":"_1-3-initialize-terraform-project"},{"level":3,"title":"1.4 Deploy Azure infrastructure","slug":"_1-4-deploy-azure-infrastructure"},{"level":2,"title":"2. Deploy Code To Azure","slug":"_2-deploy-code-to-azure"},{"level":3,"title":"2.1 Login To The Azure CLI","slug":"_2-1-login-to-the-azure-cli"},{"level":3,"title":"2.2 Deploy Function App to Azure","slug":"_2-2-deploy-function-app-to-azure"},{"level":3,"title":"2.3 Set Environment Variables","slug":"_2-3-set-environment-variables"}],"relativePath":"guide/backend/deployment.md","lastUpdated":1644447714407}',o={},i=t(`<h1 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-hidden="true">#</a></h1><hr><h4 id="content" tabindex="-1">Content <a class="header-anchor" href="#content" aria-hidden="true">#</a></h4><p><div class="table-of-contents"><ul><li><a href="#_0-clone-git-repository">0. Clone Git Repository</a></li><li><a href="#_1-setup-infrastructure-with-terraform">1. Setup Infrastructure With Terraform</a><ul><li><a href="#_1-1-install-terraform">1.1 Install Terraform</a></li><li><a href="#_1-2-setup-environment-variables">1.2 Setup Environment Variables</a></li><li><a href="#_1-3-initialize-terraform-project">1.3 Initialize Terraform Project</a></li><li><a href="#_1-4-deploy-azure-infrastructure">1.4 Deploy Azure infrastructure</a></li></ul></li><li><a href="#_2-deploy-code-to-azure">2. Deploy Code To Azure</a><ul><li><a href="#_2-1-login-to-the-azure-cli">2.1 Login To The Azure CLI</a></li><li><a href="#_2-2-deploy-function-app-to-azure">2.2 Deploy Function App to Azure</a></li><li><a href="#_2-3-set-environment-variables">2.3 Set Environment Variables</a></li></ul></li></ul></div></p><hr><p>To deploy the infrastructure and code follow the following steps:</p><p>For the initial setup use Terraform. Terraform creates all necessary services on Azure. The Terraform script must be executed only once at the beginning. If it has already been deployed, proceed to step 2 (<a href="#2-deploy-code-to-azure">2. Deploy Code To Azure</a>).</p><h2 id="_0-clone-git-repository" tabindex="-1">0. Clone Git Repository <a class="header-anchor" href="#_0-clone-git-repository" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># SSH</span>
<span class="token function">git</span> clone git@github.com:Re-Krass/amos2021ws06-exp-similarity-detector.git
<span class="token comment"># HTTPS</span>
<span class="token function">git</span> clone https://github.com/Re-Krass/gitamos2021ws06-exp-similarity-detector.git
</code></pre></div><p>Or download the latest release and unzip the package from:<br><a href="https://github.com/Re-Krass/amos2021ws06-exp-similarity-detector/releases/latest" target="_blank" rel="noopener noreferrer">latest</a></p><h2 id="_1-setup-infrastructure-with-terraform" tabindex="-1">1. Setup Infrastructure With Terraform <a class="header-anchor" href="#_1-setup-infrastructure-with-terraform" aria-hidden="true">#</a></h2><h3 id="_1-1-install-terraform" tabindex="-1">1.1 Install Terraform <a class="header-anchor" href="#_1-1-install-terraform" aria-hidden="true">#</a></h3><p>Download and install Terraform from: <a href="https://learn.hashicorp.com/tutorials/terraform/install-cli" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/terraform/install-cli</a></p><h3 id="_1-2-setup-environment-variables" tabindex="-1">1.2 Setup Environment Variables <a class="header-anchor" href="#_1-2-setup-environment-variables" aria-hidden="true">#</a></h3><p>Go to the folder: <code>Code/BackendAPI/terraform/</code>.</p><p>Copy the file <code>terraform.template.tfvars</code> and rename it to: <code>terraform.tfvars</code>.<br> Replace the variable placeholders. A description of these is given by the following table:</p><table><thead><tr><th>Variable name</th><th>Description</th></tr></thead><tbody><tr><td><code>collectionname</code></td><td>Identifier for every Azure resource</td></tr><tr><td><code>adminemail</code></td><td>E-Mail to receive notifications</td></tr></tbody></table><h3 id="_1-3-initialize-terraform-project" tabindex="-1">1.3 Initialize Terraform Project <a class="header-anchor" href="#_1-3-initialize-terraform-project" aria-hidden="true">#</a></h3><div class="language-powershell"><pre><code>terraform <span class="token operator">-</span><span class="token function">chdir</span>=<span class="token string">&quot;terraform&quot;</span> init
</code></pre></div><h3 id="_1-4-deploy-azure-infrastructure" tabindex="-1">1.4 Deploy Azure infrastructure <a class="header-anchor" href="#_1-4-deploy-azure-infrastructure" aria-hidden="true">#</a></h3><div class="language-powershell"><pre><code>terraform <span class="token operator">-</span><span class="token function">chdir</span>=<span class="token string">&quot;terraform&quot;</span> apply
</code></pre></div><h2 id="_2-deploy-code-to-azure" tabindex="-1">2. Deploy Code To Azure <a class="header-anchor" href="#_2-deploy-code-to-azure" aria-hidden="true">#</a></h2><h3 id="_2-1-login-to-the-azure-cli" tabindex="-1">2.1 Login To The Azure CLI <a class="header-anchor" href="#_2-1-login-to-the-azure-cli" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code>az login
</code></pre></div><h3 id="_2-2-deploy-function-app-to-azure" tabindex="-1">2.2 Deploy Function App to Azure <a class="header-anchor" href="#_2-2-deploy-function-app-to-azure" aria-hidden="true">#</a></h3><p>Go to the folder: <code>Code/BackendAPI/terraform/</code>.</p><div class="language-bash"><pre><code>func azure functionapp publish <span class="token operator">&lt;</span>function-app-name<span class="token operator">&gt;</span>

<span class="token comment"># Example</span>
func azure functionapp publish fa-similarity-detector-func
</code></pre></div><h3 id="_2-3-set-environment-variables" tabindex="-1">2.3 Set Environment Variables <a class="header-anchor" href="#_2-3-set-environment-variables" aria-hidden="true">#</a></h3><p>Copy the file <code>template.secrets</code> to a file named <code>.secrets</code> and replace <code>&quot;&lt;Please set this variable&gt;&quot;</code> with the right variables.</p><h4 id="azure" tabindex="-1">Azure <a class="header-anchor" href="#azure" aria-hidden="true">#</a></h4><ol><li>Go to <a href="https://portal.azure.com/" target="_blank" rel="noopener noreferrer">Azure Portal</a>.</li><li>Go to <code>Home &gt; Function App &gt; &lt;Function App Name&gt;</code>.</li><li>Go to the <code>Settings</code> column and <code>Configuration</code>.</li><li>Click on <code>Advanced edit</code> and paste the output from the following command under the existing variables (or replace the old ones.)<div class="language-bash"><pre><code>python ./scripts/gh_secret_env_vars.py --format_azure
</code></pre></div></li><li>Click on <code>OK</code> and <code>Save</code> (Don&#39;t forget to save!).</li></ol>`,31),n=[i];function l(s,c,d,p,h,u){return a(),r("div",null,n)}var _=e(o,[["render",l]]);export{m as __pageData,_ as default};
