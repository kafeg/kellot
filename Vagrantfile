# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|


  # The vbguest and omnibus plugins should make other boxes possible.
  config.vm.box = "trusty64"

  config.vm.box_url = "http://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"

  config.vm.synced_folder ".", "/vagrant", type: "smb"
  config.vm.network  :private_network, ip: "10.11.12.13"

  config.berkshelf.enabled = true

  config.omnibus.chef_version = :latest

  # This VM config option is required in order to be able to create the mount --bind symlink to the sync folder
  config.vm.provider "virtualbox" do |v|
    v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/vagrant-root", "1"]
  end
  
  config.vm.provider "virtualbox" do |v|
    v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    v.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
	v.customize ["modifyvm", :id, "--nictype1", "virtio"]
  end
  
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 4
  end

  config.vm.provision "chef_solo", run: "always" do |chef|

    chef.add_recipe "meteor_windows"

    chef.json = {
      :nodejs => {
        :install_method => "package"
      },
      :meteor_windows => {
        :apps => [],
		:install_acpipowerbutton => true,
      }
    }
  end
end

