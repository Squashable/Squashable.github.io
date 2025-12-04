import React from 'react';
import ImageCarousel from './components/ImageCarousel';
export default function UniProject01() {
  return (
    <div style={{ padding: 20, maxWidth: 900, margin: '0 auto' }}>
      <h1>Year 1 : Automated bin</h1>
      <p style={{ fontStyle: 'italic', color: '#555' }}>The first mechatronics project.</p>

      <section>
        <h2>Overview</h2>
        <p>The mechatronics project itself is simple, create a bin lid that opens when someone gets close to it.
          However I wanted to push it a little further by adding a sensor inside the bin to tell you when it's full.
          The evolution of this idea is to have it talk to you as well, that is a work in progress because I want to 
          make sure the project work so I can pass the moduel. I feel a bit overconfident about the project so i'm 
          reinning in my ambitions for now.
        </p>
      </section>

      <section>
        <h2>Plan</h2>
        <p> the plan for the project was going to be incredibly complicated. I awas going to have the bin talk to you
          depending on the interactions if the bin is full or you are putting rubbish in it. However after looking getting 
          sound files working on ESP32

        </p>
      </section>

      <section>
        <h2>First week </h2>
        <p> I had a basic understanding of arduino from my foundation year. (This is where the overconfidence came from)
          I assembled everything I needed and originally decided to use one of my ESP32-C3 boards I had 8 of at the time. 
          Once I got a arduino UNO r4 I learned how to use the NewPing.h librarie to work the ultrasonic sensor,
          later that week I figured out that the arduino nano R4 exited and I could shrink down the size of the project 
          onto a protoboard. Forgetting that we were supposed to create a PCB for the project.
        </p>
      </section>

      <section style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h2>Second week</h2>
          <p>I've aquired a Arduino nano R4 and soldered the pins to it, YAY that's the first time I've soldered something.
            I've still been developing with the arduino uno r4 because the pins are easier to get at for switching if any problems appear.
            The project itself is coming together nicely, phisically, the Autodesk fusion work is another story. I will do that another day
          </p>
        </div>
        <img src="/arduino.jpeg" alt="Second week project - Arduino nano R4" style={{ maxWidth: '300px', height: 'auto', minWidth: '200px' }} />
      </section>

      <section>
        <h2>Week two part two</h2>
        <p>I finally decided to making the PCB for the project, in foundation mechatronics we used TinkerCAD to simulate the circuits to make
          sure we didn't explode any components. Mike (the lab technition) told me that TinkerCAD could export to autodesk Fusion for the PCB design.
          So I went through that work and after listening to my peers complain about not being able to understand how it works, TinkerCAD was the right choice
          some minor adjustments to make the circut cleaner inserting the arduino nano r4 took some finding because it's not something that's in there by default.
          after wresteling with the autorouter to get some nice cabling I was happy enough with the design and sent it off to be printed I guess. 
          </p>
      </section>
            <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap', alignItems: 'stretch' }}>
              <img src="/Final_board_layout.png" alt="Final board layout" style={{ flex: '1 1 30%', minWidth: 200, height: 220, objectFit: 'contain' }} />
              <img src="/3D_pcb.png" alt="3D PCB render" style={{ flex: '1 1 30%', minWidth: 200, height: 220, objectFit: 'contain' }} />
              <img src="/tinkecadExport.png" alt="Tinkercad export" style={{ flex: '1 1 30%', minWidth: 200, height: 220, objectFit: 'contain' }} />
            </div>

      <section>
        <h2>Week Three</h2>
        <p>
          This week was all testing, I found that my PIR wasn't operating proerly so I swapped it for an IR sensor which worked much better. 
          Once this is working, the code is blocking with the "delay(500);" so I replaced it a "millis();" and this fixed the blocking issue.
          I moved the loop for the IR sensor ontop of the ulrasonic code so it does interupt the ultrasonic when the bin is open. 
          Essentailly LID OPEN = NO ULTRASONIC READINGS. and the LEDS that indicate the full level of the bin don't show while something is being put in the bin. 
          This is the final code, i hope, for the project. The only things that could be implimented in a future version. Probaly with a Raspberry Pi Zero W2. 
        </p>
        <div style={{ maxWidth: 900, marginTop: 12 }}>
          <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
            <iframe
              src="https://streamable.com/e/pl59cl?"
              title="Project video"
              allow="fullscreen"
              allowFullScreen
              style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, overflow: 'hidden' }}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>

      <section>
        <h2>Week Four</h2>
        <p> Finalising the code and making sure the logbook has enough content in it to pass that week, hopefully they'll read the website as a submission.
          print the QR code and stick it in the log book.
          Here's a finalised version of the code the only thing that will change now is pin assignments. 
          </p> 
        <pre style={{ background: '#f6f8fa', padding: 12, overflowX: 'auto', whiteSpace: 'pre', fontFamily: 'monospace', fontSize: '14px', textAlign: 'left', lineHeight: '1.5' }}>
{`// Final code
#include <NewPing.h>
#include <Servo.h>

Servo myservo;
//first loop
#define trigger      2
#define echo         4 
#define max_distance 30
NewPing sonar(trigger, echo, max_distance);
#define led    8   // 
#define led2   7 // 0–10 cm
#define led3   6   // 10–20 cm



//second loop 
#define ir 12

//millis
unsigned long lidOpenStart = 0;
unsigned long time = 0;
bool lidIsOpen = false;

void setup() {
  Serial.begin(9600);
  //first loop
  pinMode(led, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  digitalWrite(led, HIGH);
  //second loop
  pinMode(ir, INPUT);
  myservo.attach(5);
  myservo.write(0);
}

void loop() {
  int distance = sonar.ping_cm();
  int irState = digitalRead(ir);

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  if (!lidIsOpen) {
      if (distance > 0 && distance <= 10) {
      digitalWrite(led2, HIGH);
      digitalWrite(led3, HIGH);
    } else if (distance > 10 && distance <= 20) {
      digitalWrite(led2, HIGH);
    } else {
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
    }
  }

  if (digitalRead(ir) == HIGH) {
    myservo.write(90);
    lidOpenStart = millis();
    lidIsOpen = true;
    Serial.println("detected!");
    digitalWrite(led2,LOW);
    digitalWrite(led3,LOW);
  } else {
    Serial.println("nothing?");
  }
  if (lidIsOpen) {
    if (millis() - lidOpenStart >= 5000) {
      myservo.write(0);
      lidIsOpen = false;
    }
  }
}


}
`}
        </pre>
      </section>

      <section>
        <h2>Week Five</h2>
        <p>Week five will be spent trying to build the two arm linkage. This isn’t something I can’t just do, I’m not used to CAD software.
          I’ve attempted to create the base of the arm, that will attach to the bin itself It will be a long one because I also have a deadline for practical electronics due next week.
          The joints are currently my pain pain point. I’m not sure how to make multiple points and make something that could screw into another component.
        </p>
      </section>

      
      <section>
        <h2>Scanned log book pages</h2>
        <p style={{ color: '#666' }}></p>
        <ImageCarousel bases={[ 'page_1', 'page_2', 'page_3', 'page_4', 'page_5', 'page_6', 'page_7' ]} interval={4000} height={420} />
      </section>

    </div>
  );
  

}