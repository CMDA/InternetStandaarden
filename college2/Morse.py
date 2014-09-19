#!/usr/bin/env python

"""Generate a morse signal.

This program uses a phidgets interfacekit with an attached relay to translate
a charstring to morse using the relay as transmission key. You can attach either
a lamp or a sound generator. The phidgets python example scripts by Adam Stelmack
were used as basis for this script.
"""

__author__ = "Justus Sturkenboom"
__copyright__ = "Copyleft 2012, All wrongs reversed"
__credits__ = ["Adam Stelmack"]

__license__ = "Creative Commons"
__version__ = "0.1"
__maintainer__ = "Justus Sturkenboom"
__email__ = "j.p.sturkenboom@hva.nl"
__status__ = "Development"

#Basic imports
from ctypes import *
import sys, random, time

#Phidget specific imports
from Phidgets.PhidgetException import PhidgetErrorCodes, PhidgetException
from Phidgets.Events.Events import AttachEventArgs, DetachEventArgs, ErrorEventArgs, InputChangeEventArgs, OutputChangeEventArgs, SensorChangeEventArgs
from Phidgets.Devices.InterfaceKit import InterfaceKit

#Initialization
message  = 'Welkom propedeuse 2012'

morsetab = {'A': '.-', 'a': '.-', 'B': '-...', 'b': '-...', 'C': '-.-.', 'c': '-.-.', 'D': '-..', 'd': '-..', 'E': '.', 'e': '.', 'F': '..-.', 'f': '..-.', 'G': '--.', 'g': '--.', 'H': '....', 'h': '....', 'I': '..', 'i': '..', 'J': '.---', 'j': '.---', 'K': '-.-', 'k': '-.-', 'L': '.-..', 'l': '.-..', 'M': '--', 'm': '--', 'N': '-.', 'n': '-.', 'O': '---', 'o': '---', 'P': '.--.', 'p': '.--.', 'Q': '--.-', 'q': '--.-', 'R': '.-.', 'r': '.-.', 'S': '...', 's': '...', 'T': '-', 't': '-', 'U': '..-', 'u': '..-', 'V': '...-', 'v': '...-', 'W': '.--', 'w': '.--', 'X': '-..-', 'x': '-..-', 'Y': '-.--', 'y': '-.--', 'Z': '--..', 'z': '--..', '0': '-----', ',': '--..--', '1': '.----', '.': '.-.-.-', '2': '..---', '?': '..--..', '3': '...--', ';': '-.-.-.', '4': '....-', ':': '---...', '5': '.....', "'": '.----.', '6': '-....', '-': '-....-', '7': '--...', '/': '-..-.', '8': '---..', '(': '-.--.-', '9': '----.', ')': '-.--.-', ' ': ' ', '_': '..--.-'}

# dah should be three dots. (check)
# Space between dots and dahs should be one dot.(check)
# Space between two letters should be one dah. (check)
# Space between two words should be dot dah dah. (check)
dot = .09
dah = 3 * dot


#Create an interfacekit object
try:
    interfaceKit = InterfaceKit()
except RuntimeError as e:
    print("Runtime Exception: %s" % e.details)
    print("Exiting....")
    exit(1)

#Event Handler Callback Functions
def inferfaceKitAttached(e):
    attached = e.device
    print("InterfaceKit %i Attached!" % (attached.getSerialNum()))

def interfaceKitDetached(e):
    detached = e.device
    print("InterfaceKit %i Detached!" % (detached.getSerialNum()))

def interfaceKitError(e):
    try:
        source = e.device
        print("InterfaceKit %i: Phidget Error %i: %s" % (source.getSerialNum(), e.eCode, e.description))
    except PhidgetException as e:
        print("Phidget Exception %i: %s" % (e.code, e.details))

def interfaceKitInputChanged(e):
    source = e.device
    print("InterfaceKit %i: Input %i: %s" % (source.getSerialNum(), e.index, e.state))

def interfaceKitSensorChanged(e):
    source = e.device
    print("InterfaceKit %i: Sensor %i: %i" % (source.getSerialNum(), e.index, e.value))

def interfaceKitOutputChanged(e):
    source = e.device
    #print("InterfaceKit %i: Output %i: %s" % (source.getSerialNum(), e.index, e.state))

#Morse Functions
def morseEncode(string):
    morseString = ''
    for c in string:
        try:
            morseString += morsetab[c] + '\001'
        except KeyError:
            pass
    return morseString

def send(morseString):
    morseOutput = ''
    for c in morseString:
        if c == '.':
            openRelay(dot)
            morseOutput += '.'
        elif c == '-':
            openRelay(dah)
            morseOutput += '-'
        elif c == ' ': #space between words
            pause(dot+dah+dah)
            print('')
        else: #space between letters
            pause(dah)
            print('%s %s' % (morseOutput, [k for k, v in morsetab.iteritems() if v == morseOutput]))
            morseOutput = ''
        pause(dot)

def openRelay(duration):
    #print("Switching relay for %f miliseconds" % (duration))
    interfaceKit.setOutputState(0, 1)
    time.sleep(duration)
    interfaceKit.setOutputState(0, 0)

def pause(duration):
    time.sleep(duration)

#Main Program Code
try:
    interfaceKit.setOnAttachHandler(inferfaceKitAttached)
    interfaceKit.setOnDetachHandler(interfaceKitDetached)
    interfaceKit.setOnErrorhandler(interfaceKitError)
    interfaceKit.setOnInputChangeHandler(interfaceKitInputChanged)
    interfaceKit.setOnOutputChangeHandler(interfaceKitOutputChanged)
    interfaceKit.setOnSensorChangeHandler(interfaceKitSensorChanged)
except PhidgetException as e:
    print("Phidget Exception %i: %s" % (e.code, e.details))
    print("Exiting....")
    exit(1)

print("Opening phidget object....")

try:
    interfaceKit.openPhidget()
except PhidgetException as e:
    print("Phidget Exception %i: %s" % (e.code, e.details))
    print("Exiting....")
    exit(1)

print("Waiting for attach....")

try:
    interfaceKit.waitForAttach(10000)
except PhidgetException as e:
    print("Phidget Exception %i: %s" % (e.code, e.details))
    try:
        interfaceKit.closePhidget()
    except PhidgetException as e:
        print("Phidget Exception %i: %s" % (e.code, e.details))
        print("Exiting....")
        exit(1)
    print("Exiting....")
    exit(1)
else:
    morse = morseEncode(message)

    while(True):
        send(morse)



# Wait for keypress to close the program
print("Press Enter to quit....")
chr = sys.stdin.read(1)

print("Closing...")

try:
    interfaceKit.setOutputState(0, False)
    interfaceKit.closePhidget()
except PhidgetException as e:
    print("Phidget Exception %i: %s" % (e.code, e.details))
    print("Exiting....")
    exit(1)

print("Done.")
exit(0)
