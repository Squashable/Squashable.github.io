import React from 'react';
import ImageCarousel from './components/ImageCarousel';
import './UniProject01.css';
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
          sound files working on ESP32 it seemed like a headache; converting to .wav then compressing it a bunch just to get 
          it to work on the board. I will just do that with a raspberry pi zero w2 in the future version of this project.
          So the final plan is a Arduino nano R4 as the brain, an ultrasonic sensor, an IR sensor and three LEDS to make sure 
          the project is a success.

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

      <section className="week-two">
        <div style={{ flex: 1 }}>
          <h2>Second week</h2>
          <p>I've aquired a Arduino nano R4 and soldered the pins to it, YAY that's the first time I've soldered something.
            I've still been developing with the arduino uno r4 because the pins are easier to get at for switching if any problems appear.
            The project itself is coming together nicely, phisically, the Autodesk fusion work is another story. I will do that another day
          </p>
        </div>
        <img className="week-two-image" src="/arduino.jpeg" alt="Arduino nano R4" />
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
        <p>
           I was trying to get this done on autodesk fusion, however I got very annoyed with the way sketches were made for multiple bodies. So I started using SOLIDworks.
          After a basic tutorial I’ve got some understanding of how it works. To get the curves in the design to make it look better. 
        </p>
        <p>
               I ended up jumping between fusion and solid works, getting a little bit stunned, getting annoyed, going back to fusion, getting a little bit more done, going back to solid works, getting a little bit more done.
            This process continued for about three hours until I landed on fusion and fusion worked.I’ve found a way to “fillet” the sides, it just makes the design look better. 
            I’ve also fixed the holes so they are now the same height all the way through
        </p>
        <p>
          The final design is included a bar instead of a hole between the two base attach points. This makes it easier to print the part. After being shown how to use fusion by a friend, 
          doing the work became incredibly easy. Having someone help me through the little knacks of the software make my life easier. The final design uses a split end at the joint and a screw
          point to keep it together and allow movement with two bigger circles on either side. 3D printing, now I understand it, will be able to solve a ton of different problems.
          the final design needed a 10% shrink in size to fit into the printer so it came out all at once. Once my arm is no longer circulating blood wrong I should be able to have it assembled.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'space-between' }}>
          <img src="/3D_print1.png" alt="3D PCB render" style={{ flex: '1 1 22%', minWidth: 160, height: 220, objectFit: 'contain' }} />
          <img src="/3d_print2.png" alt="3D print image" style={{ flex: '1 1 22%', minWidth: 160, height: 220, objectFit: 'contain' }} />
          <img src="/Final_Parts.jpg" alt="Final printed parts" style={{ flex: '1 1 22%', minWidth: 160, height: 220, objectFit: 'contain' }} />
          <img src="/Final_fusion.png" alt="Final Fusion 3D model" style={{ flex: '1 1 22%', minWidth: 160, height: 220, objectFit: 'contain' }} />
        </div>
      </section>

      <section>
        <h2>Week Six : Assembly</h2>
        <p> Just from notes from week 5 for this one, this is not going to be fun because I don't know how much I'm going to be able to do, so I'm going to need people's help to get this working.
           The react logos are there so I can just get the image placeholders.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'space-between' }}>
          <img src="/logo512.png" alt="3D PCB render" style={{ flex: '1 1 22%', minWidth: 160, height: 220, objectFit: 'contain' }} />
          <img src="/logo512.png" alt="3D print image" style={{ flex: '1 1 22%', minWidth: 160, height: 220, objectFit: 'contain' }} />
          <img src="/logo512.png" alt="Final printed parts" style={{ flex: '1 1 22%', minWidth: 160, height: 220, objectFit: 'contain' }} />
          <img src="/logo512.png" alt="Final Fusion 3D model" style={{ flex: '1 1 22%', minWidth: 160, height: 220, objectFit: 'contain' }} />
        </div>
      </section>

      <section>
          <h2>Closing Thoughts  This is being spoken, my hand is killing me. Well, my Right arm is...</h2>
        <p>
           Final notes on the project, it's been quite challenging considering I looked to the brief and when I'm making a bin, you kidding?
            They've never done 3D modelling before, never sold it. Honestly both ended up being great fun and great past times to the point where I've made a couple of things for myself.
            My final joints, I'm just missing the screw hole for the bit that connects to the lid to the motor at the back. I've converted the bin from a 9 volt battery over to USB-C after I've figured out we aren't getting our PC... PCBs, which is fine because I enjoy pro-tobording anyway.
            Well I've recently figured that out. The bin's now powered over USB-C so we DC to DC boost butt converter which I got from AliExpress and now I've known that's a thing, I will be using that combination a lot.
            I had a problem where if it talks to a plug socket that doesn't purely provide power, obviously reasonable limits of power for the controller, it just refuses to give it power which I still haven't fixed but if I use exclusively a power cable, it's not a problem and it provides juice perfectly.
            Power switch I'm still not sure on but to be honest it's well beyond the spec at this point. So I'm just very happy with everything as it is.
        </p>
      </section>

      
      <section>
        <h2>Scanned log book pages</h2>
        <p style={{ color: '#666' }}></p>
        <ImageCarousel bases={[ 'page_1', 'page_2', 'page_3', 'page_4', 'page_5', 'page_6', 'page_7' ]} interval={4000} height={420} />
      </section>
      <section>
        <h2>Scanned lecture notes.</h2>
        <p style={{ color: '#666' }}></p>
        <ImageCarousel bases={[ 'page_1', 'page_2', 'page_3', 'page_4', 'page_5', 'page_6', 'page_7' ]} interval={4000} height={420} />
      </section>
    </div>
  );
  

}