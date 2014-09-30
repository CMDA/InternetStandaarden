# SASS Masterclass

Sass = Syntactically Awesome StyleSheets

SassScript
CSS pre-processor

# CSS Preprocessor

blackbox -> CSS

# Developed by
Bedacht door Hampton Catlin (SASS, Haml) en ontwikkeld door Nathan Weizenbau (Google Dart -> lead dev op Haml en Sass)

# Koala-app.com
Download it, fire it up, voeg je project map toe, download de voorbeeld HTML

.sass | .scss -> .css

# Sass features, met voorbeelden en opdrachten
SCSS (SassyCSS), superset van CSS met brackets en semicolons. Gewone reguliere CSS is valide SCSS. SCSS sheets hebben de extentie .scss (standaard manier van werken

SASS (ingesprongen syntax), in plaats van brackets en semicolons inspringen om blocks te specificeren. SassScripts krijgen de .sass extensie. (Ouder, minder gebruikt)

# Sass - Variabelen

$myred: #ff0000;
h1 {
	color: $myred;
}

# Sass - Operaties en functies
$page: 960px;
$sidebar: 220px;

main {
	width: $page - $sidebar;
}

$links: #0000ff;
a {
	color: $links;
	&:hover { lighten($links, 20%); }
}

# Sass - Mixins

@mixin box1 {
	border: 1px dotted #000;
	background-color: #f4f4f4;
	padding: 15px;
}
.myblock {
	@include box1;
}

@mixin rotate($deg: 90deg){
			-webkit-transform: rotate($deg);
      -ms-transform: rotate($deg);
          transform: rotate($deg);
}

# Sass - Overerving

.button {
	margin:0px;padding:0px;
	width: auto;
	background: grey;
}

.submit {
	@extend .button;
	background: green;
}

.cancel {
	@extend .button;
	background: red;
}

@extend .button

# Sass - Nesten
Nesten -> Parent References -> Properties

nav {
	background: silver;

	ul {
		margin: 0px;
		padding: 0px;
		
		li {
			list-style: none;
			display: inline;

			a {
				display: inline-block;
				width: 33%;
				height: 3em;
				line-height: 3em;
				color: black;
				text-align: center;

				border: {
					style: solid;
					color: black;
					top: {
						color: grey;
					}
				}
				
				&:hover { color: red; }
				&:visited { color: pink; }
			}
		}
	}
}

# Sass - Partials! en @import
@import “partials/variables”; voor ./partials/_variables.scss

Bijvoorbeeld:
- variables
- mixins
- normalize
- fonts
- grid
- navigation
- main
- helpers
- print

http://alistapart.com/blog/post/organize-that-sass

# Recap

