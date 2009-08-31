/**
 * Wake-up script
 * Launches iTunes, plays tracks from an "Alarm Clock" playlist.
 * Launches Firefox with the last session's tabs.
 * Launches Firefox with a range of tabs featuring news etc.
 * 
 * iTunes COM SDK is available at http://bit.ly/ouINI (you will need
 * to login with an ADC account - free to register.
 * 
 * Author: Ross Masters <ross@php.net> http://rmasters.github.com
 */

// Launch iTunes
// Retrieves the main library, and the playlists within it, opens the
// "Alarm Clock" playlist and plays the first track from it.
// TODO: Check a playlist named "Alarm Clock" exists
var iTunes = WScript.CreateObject("iTunes.Application");
var mainLibrary = iTunes.LibrarySource;
var playlists = mainLibrary.Playlists;
var playlist = playlists.ItemByName("Alarm Clock");
playlist.PlayFirstTrack();

// TODO: Firefox launching (no COM interface?)