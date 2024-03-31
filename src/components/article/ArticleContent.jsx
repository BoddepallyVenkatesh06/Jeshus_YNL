const ArticleContent = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold md:text-3xl font-lora">
          स्वास्थ्यको लागि घातक छन् यी फुड कम्बिनेशन
        </h2>
        {/* content stylings */}
        <div className="content-stylings mt-6">
          <p>
            काठमाडौँ । हामी दिनहुँ अनेकौँ खानेकुरा खान्छौँ । सँगसँगै खाँदा केही
            खानेकुरा हाम्रो शरीरका लागि लाभदायक पनि हुन्छन् । जस्तै भिटामिड डी र
            क्याल्सियम, आइरन र भिटामिन सी आदि ।
          </p>
          <p>
            तर केही फुड कम्बिनेशन भने यस्तो घातक हुन्छन् कि हाम्रो स्वास्थ्यमा
            नराम्रो असर पनि पार्न सक्छ, क्षति पुर्याउन सक्छ । यस्ता खानेकुरा
            खाँदा कहिलेकाहीँ पाचनमा समस्या, पेट फुल्ने, अपच जस्ता समस्या देखिन
            सक्छन् । हाम्रो लागि घातक यस्तै केही फुड कम्बिनेशनबारे कुरा गरौँ ।
          </p>
          <h3>अमिलो खानेकुराको साथमा दूध</h3>
          <p>
            सुन्तला, निबुआ जस्तो फलमा एसिड हुन्छ । यी खानेकुराहरुलाई दूधसँगै
            खाँदा पाचनसम्बन्धी समस्याहरु उत्पन्न हुन सक्छ । यी दुबैलाई एकै पटक
            सकेसम्म नखानु होला ।
          </p>
          <p>
            खाना खाने बित्तिकै फलफूल फिटिक्कै नखानुहोला । खानाबाट हाम्रो शरीरले
            पहिला नै धेरै क्यालोरी पाइसकेको हुन्छ । यो नपच्दै खाना खाने बित्तिकै
            फलफूल खाँदा शरीरमा क्यालोरीको मात्रा बढ्छ । यति धेरै क्यालोरीलाई
            कसरी ‘बर्न’ गर्ने ?
          </p>
          <p>
            At preline, our mission has always been focused on bringing openness
            and transparency to the design process. We've always believed that
            by providing a space where designers can share ongoing work not only
            empowers them to make better products, it also helps them grow.
          </p>
          <p>
            We're proud to be a part of creating a more open culture and to
            continue building a product that supports this vision.
          </p>
          <img src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
          <p>
            As we've grown, we've seen how Preline has helped companies such as
            Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their
            designers closer together to create amazing things. We've also
            learned that when the culture of sharing is brought in earlier, the
            better teams adapt and communicate with one another.
          </p>
          <p>
            <a href="#">free version of Preline</a>, which will allow individual
            designers, startups and other small teams a chance to create a
            culture of openness early on.
          </p>
          <blockquote>
            <p>
              To say that switching to Preline has been life-changing is an
              understatement. My business has tripled and I got my life back.
            </p>
            <p>Nicole Grazioso</p>
          </blockquote>

          <img src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />

          <h3>Bringing the culture of sharing to everyone</h3>
          <p>
            We know the power of sharing is real, and we want to create an
            opportunity for everyone to try Preline and explore how
            transformative open communication can be. Now you can have a team of
            one or two designers and unlimited spectators (think PMs,
            management, marketing, etc.) share work and explore the design
            process earlier.
          </p>
          <ul>
            <li>
              Preline allows us to collaborate in real time and is a really
              great way for leadership on the team to stay
              <a href="#">said</a> Stewart Scott-Curran, Intercom's Director of
              Brand Design.
            </li>
            <li>
              Preline opened a new way of sharing. It's a persistent way for
              everyone to see and absorb each other's work, said David Scott,
              Creative Director at
              <a href="#">Eventbrite</a>.
            </li>
          </ul>
        </div>
        {/* end of content stylin gs */}
      </div>

      <div>
        <a
          className="m-1 inline-flex items-center gap-1.5 py-1 text-gray px-3 rounded-full text-sm bg-gray/5 text-gray-800 hover:bg-gray hover:text-white"
          href="#"
        >
          Research
        </a>
        <a
          className="m-1 inline-flex items-center gap-1.5 py-1 text-gray px-3 rounded-full text-sm bg-gray/5 text-gray-800 hover:bg-gray hover:text-white"
          href="#"
        >
          Information
        </a>
        <a
          className="m-1 inline-flex items-center gap-1.5 py-1 text-gray px-3 rounded-full text-sm bg-gray/5 text-gray-800 hover:bg-gray hover:text-white"
          href="#"
        >
          History
        </a>
        <a
          className="m-1 inline-flex items-center gap-1.5 py-1 text-gray px-3 rounded-full text-sm bg-gray/5 text-gray-800 hover:bg-gray hover:text-white"
          href="#"
        >
          Pragmatic
        </a>
      </div>
    </div>
  );
};

export default ArticleContent;
