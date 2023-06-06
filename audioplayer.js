/**
 * @file Audio Player for Toonboom Harmony Scripts
 * @version 23.6.6
 * @copyright miwgel
 * @author miwgel < www.github.com/miwgel >
 * @license
 * Copyright 2023 Miguel Brito
 * The current script (the "Script") is the exclusive property of Miguel Brito and is protected by copyright laws and international treaty provisions. The Script is licensed, not sold.
 * Subject to the terms and conditions of this license, Miguel Brito grants to the purchaser of the Script (the "Licensee") a non-exclusive, non-transferable license to use the Script for the Licensee's own internal business or personal purposes. Any use of the Script beyond the scope of this license is strictly prohibited.
 * The Licensee is not allowed to copy, modify, distribute, sell, transfer, sublicense, or reverse engineer the Script without the prior written consent of Miguel Brito.
 * The Script is provided "as is" without warranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose. In no event shall Miguel Brito be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the Script.
 * This license is effective until terminated. This license will terminate automatically without notice from Miguel Brito if the Licensee fails to comply with any provision of this license. Upon termination, the Licensee must immediately cease all use of the Script.
 * This license shall be governed by and construed in accordance with the laws of Ecuador. Any disputes arising under or in connection with this license shall be resolved by the courts located in Ecuador.
 * By using the Script, the Licensee agrees to be bound by the terms and conditions of this license. If the Licensee does not agree to these terms, they must not use the Script.
 */

 /**
  * 
  * @constructor
  * @classdesc 
  * Plays a wav audio file
  * @param {string} filePath Path to the audio file
  * @param {bool} debug Optional: Display debug messages in the MessageLog
  */
function AudioPlayer(filePath, debug) {
  if (typeof debug === "undefined") var debug = false;

  this.debug = debug;
  this.filePath = filePath;
}

/**
 * Plays the audio 
 */
AudioPlayer.prototype.play = function () {
  var sfx = new QSoundEffect();
  sfx.setSource(QUrl.fromLocalFile(this.filePath));
  sfx.play();
  // var proc = new QProcess();
  // if (about.isMacArch() || about.isLinuxArch()) {
  //   var sfx = new QSoundEffect();
  //   sfx.setSource(QUrl.fromLocalFile(filePath));
  //   sfx.play();
  // } else if (about.isWindowsArch()) {
  //   proc.start("powershell.exe", [
  //     "-c",
  //     "(New-Object Media.SoundPlayer '" + filePath + "').PlaySync()",
  //   ]);
  //   //   proc.waitForFinished(-1);
  // }
};

/**
 * Prints a debug message to the MessageLog
 * @param { string | any } message Message or object to print to the MessageLog
 */
AudioPlayer.prototype.log = function (message) {
  if (this.debug) {
    if (typeof message === "object" || typeof message === "array") {
      message = JSON.stringify(message);
    }
    MessageLog.trace("[ AudioPlayer ] > " + message);
  }
};

exports.AudioPlayer = AudioPlayer;
