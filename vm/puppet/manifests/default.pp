$ar_databases = ['activerecord_unittest', 'activerecord_unittest2']
$as_vagrant   = 'sudo -u vagrant -H bash -l -c'
$home         = '/home/vagrant'

Exec {
  path => ['/usr/sbin', '/usr/bin', '/sbin', '/bin']
}

# --- Preinstall Stage ---------------------------------------------------------

stage { 'preinstall':
  before => Stage['main']
}

class apt_get_update {
  exec { 'apt-get -y update':
    unless => "test -e ${home}/.rvm"
  }
}
class { 'apt_get_update':
  stage => preinstall
}

# --- Packages -----------------------------------------------------------------

package { 'curl':
  ensure => installed
}

package { 'build-essential':
  ensure => installed
}

package { 'git-core':
  ensure => installed
}

# Nokogiri dependencies.
package { ['libxml2', 'libxml2-dev', 'libxslt1-dev']:
  ensure => installed
}

# --- Node.js -----------------------------------------------------------------

exec { 'apt-get update':
  command => '/usr/bin/apt-get update',
  timeout => 0
} ->

package { ['python-software-properties']:
  ensure => installed
} ->

exec { 'add-repository nodejs':
  command => '/usr/bin/add-apt-repository ppa:chris-lea/node.js',
  unless  => '/usr/bin/apt-key list | grep node'
} ->

exec { 'apt-get update2':
  command => '/usr/bin/apt-get update',
  timeout => 0
} ->

package { ['nodejs', 'figlet', 'libfontconfig1', 'make', 'g++', 'graphicsmagick', 'imagemagick']:
  ensure => installed
} ->

exec { "install-coffee":
  command => "/usr/bin/sudo /usr/bin/npm install -g coffee-script",
  path    => "/usr/local/bin",
  unless  => "/usr/bin/which coffee"
} ->

exec { "install-forever":
  command => "/usr/bin/sudo /usr/bin/npm install -g forever",
  path    => "/usr/local/bin",
  unless  => "/usr/bin/which forever"
}

exec { "install-phantomjs":
  command => "/usr/bin/sudo /usr/bin/npm install -g phantomjs",
  path    => "/usr/local/bin",
  unless  => "/usr/bin/which phantomjs"
}

exec { "install-browserify":
  command => "/usr/bin/sudo /usr/bin/npm install -g browserify",
  path    => "/usr/local/bin",
  unless  => "/usr/bin/which browserify"
}

