Rontech Security Industries was a security company which operated from 1986 to its sale and merge with ART Security on the 8th of July, 2009.

The former URL, [www.rontech.com.au](https://www.rontech.com.au/), is now home to a blog unrelated to Rontech. Luckily, the original site had had [snapshots crawled of it, which are now on the Wayback Machine](http://web.archive.org/web/20100301000000*/http://www.rontech.com.au/).

***

There are three purposes to this repository:
1. Document Rontech's history, this project, and any other information. ([`main` branch](https://github.com/toydotgame/rontech.com.au/tree/main))
2. Hold an archive of the most recent copy of what was [rontech.com.au](), before becoming someone else's personal blog. ([`source` branch](https://github.com/toydotgame/rontech.com.au/tree/source))
3. Host a re-write of the original site in HTML, so that it can be hosted via GitHub pages. ([`gh-pages` branch](https://github.com/toydotgame/rontech.com.au/tree/gh-pages))

## A Note on the [`gh-pages` Branch](https://github.com/toydotgame/rontech.com.au/tree/gh-pages)
The re-creation of the site will be primarily visual, where only pages accessible through a sequence of link clicks from `/index.php` will be re-made. Pages that required direct access via the address bar will _not_ be re-added.
Currently, however, the `gh-pages` branch is using some renamed files from the original website; and although interactive and navigatable, it is not 100% functional.

## Running a Copy of the Website
### Method 1: Using This Repository
#### Requirements
* PHP

#### Launching
1. Clone the repository:
	```sh
	git clone -b source https://github.com/toydotgame/rontech.com.au.git
	cd rontech.com.au/
	```
2. Run a local PHP testing server:
	```sh
	php -S localhost:8080
	```
3. Open your web browser and enter `http://localhost:8080/` into the address bar.

### Method 2: Using a Wayback Machine Snapshot
#### Requirements
* PHP
* Ruby (>= 1.9.2)
* [Wayback Machine Downloader](https://github.com/hartator/wayback-machine-downloader)
	```sh
	gem install wayback_machine_downloader
	# Follow instructions in the same terminal session as this command will be executed in:
	export PATH=$PATH:~/.local/share/gem/ruby/3.0.0/bin
	```

#### Launching
1. Download the most recent version of the site (before [the ARTSec merge notice](web.archive.org/web/20110220104339/http://www.rontech.com.au/security/merge_notice.asp) was put up) from the Wayback Machine:
	```sh
	wayback_machine_downloader http://www.rontech.com.au/ -d snapshot/ -t 20100227092655 -a -c 10
	```
	##### Explanation of Switches Used:
	* `-d snapshot/`: Saves files in a directory called `snapshot/`.
	* `-t 20100227092655`: `20100227092655` is the timecode of the most recent, working Wayback Machine snapshot of the website. `-t` means that only files saved _on_ or _before_ this date will be downloaded.
	* `-a` will download **all** files, including those which are deprecated and older than the current snapshot, unless a more recent copy exists.
	* `-c 10` is the concurrent file download count. Feel free to push this to `20`, or `30`, etc. I use `10` 'cause it's safe.
2. Enter in to the directory and start a PHP server:
	```sh
	cd snapshot/
	php -S localhost:8080
	```
3. Open your web browser and enter `http://localhost:8080/` into the address bar.
