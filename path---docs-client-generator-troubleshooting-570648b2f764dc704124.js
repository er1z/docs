webpackJsonp([0x98c09bee7dda],{390:function(t,e){t.exports={data:{post:{html:'<h1 id="troubleshooting"><a href="#troubleshooting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Troubleshooting</h1>\n<ul>\n<li>The generator does not perform any authentication, so you must ensure that all referenced Hydra paths for your API are\naccessible anonymously. If you are using API Platform this will at least include:</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>api_entrypoint                             ANY      ANY      ANY    /{index}.{_format}\napi_doc                                    ANY      ANY      ANY    /docs.{_format}\napi_jsonld_context                         ANY      ANY      ANY    /contexts/{shortName}.{_format}</code></pre>\n      </div>\n<ul>\n<li>\n<p>If you receive <code>Error: The class http://www.w3.org/ns/hydra/core#ApiDocumentation doesn\'t exist.</code> you may have\nspecified the documentation URL instead of the entrypoint. For example if you are using API Platform and your\ndocumentation URL is at <a href="https://demo.api-platform.com/docs" target="_blank" rel="nofollow noopener noreferrer">https://demo.api-platform.com/docs</a> the entry point is\nlikely at <a href="https://demo.api-platform.com" target="_blank" rel="nofollow noopener noreferrer">https://demo.api-platform.com</a>. You can see an example of the expected\nresponse from an entrypoint in your browser by clicking visiting\n<a href="https://demo.api-platform.com/index.jsonld" target="_blank" rel="nofollow noopener noreferrer">https://demo.api-platform.com/index.jsonld</a>.</p>\n</li>\n<li>\n<p>If you receive <code>TypeError: Cannot read property \'@type\' of undefined</code> or <code>TypeError: Cannot read property \'0\' of undefined</code> check that the URL you specified is accessible and returns jsonld. You can check from the command line\nyou are using by running something like <code>curl https://demo.api-platform.com/</code>.</p>\n</li>\n<li>\n<p>If you receive a message like this:</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>{ Error\nat done (/usr/local/share/.config/yarn/global/node_modules/jsonld/js/jsonld.js:6851:19)\nat <anonymous>\nat process._tickCallback (internal/process/next_tick.js:188:7)\nname: \'jsonld.InvalidUrl\',\nmessage: \'Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object.\',\ndetails:\n{ code: \'invalid remote context\',\n url: \'https://demo.api-platform.com/contexts/Entrypoint\',\n cause: null } }</code></pre>\n      </div>\n<p>Check access to the specified url, in this case <code>https://demo.api-platform.com/contexts/Entrypoint</code>, use curl to check\naccess and the response <code>curl https://demo.api-platform.com/contexts/Entrypoint</code>. In the above case an "Access Denied"\nmessage in JSON format was being returned.  </p>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-different-serialization-groups-per-operation",title:"Using Different Serialization Groups per Operation"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-per-item-basis",title:"Changing the Serialization Context on a Per Item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"}]},{id:"errors",title:"Error Handling",anchors:[{id:"converting-php-exceptions-to-http-errors",title:"Converting PHP Exceptions to HTTP Errors"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"},{id:"partial-pagination",title:"Partial Pagination"}]},{id:"events",title:"The Event System",anchors:null},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"external-vocabularies",title:"Using External JSON-LD Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending JSON-LD context",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:'Injecting the Serializer in an "ItemDataProvider"'}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"security",title:"Security",anchors:null},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Built-in HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:"Accept application/x-www-form-urlencoded Form Data",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"jwt",title:"Adding a JWT authentication using LexikJWTAuthenticationBundle",anchors:[{id:"testing-with-swagger",title:"Testing with Swagger"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]},{id:"swagger",title:"Swagger Support",anchors:[{id:"override-swagger-documentation",title:"Override Swagger documentation"}]},{id:"graphql",title:"GraphQL Support",anchors:[{id:"overall-view",title:"Overall View"},{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"graphiql",title:"GraphiQL"}]},{id:"dto",title:"Handling Data Transfer Objects (DTOs)",anchors:null},{id:"file-upload",title:"Handling File Upload with VichUploaderBundle",anchors:null}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"kubernetes",title:"Deploying to a Kubernetes Cluster",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null}]}},{node:{title:"Extra",path:"extra",items:[{id:"releases",title:"The Release Process",anchors:null},{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/client-generator/troubleshooting",current:{path:"docs/client-generator/troubleshooting",title:"The Client Generator Component - Troubleshooting"},prev:{path:"docs/client-generator/vuejs",title:"Vue.js generator",rootPath:"The Client Generator Component"},next:{path:"docs/deployment/index",title:"Deployment - Introduction"}}}}});
//# sourceMappingURL=path---docs-client-generator-troubleshooting-570648b2f764dc704124.js.map