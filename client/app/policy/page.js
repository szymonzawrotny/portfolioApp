import Nav from '@/layouts/Nav';
import './style.scss';
const Policy = () => {
  return (
    <div className="policy">
      <Nav />
      <main>
        <div className="leftBox"></div>
        <div className="rightBox"></div>
        <div className="policyContent">
          <h1>Polityka prywatności</h1>
          <div className="text">
            <section>
              Niniejsza Polityka Prywatności opisuje zasady przetwarzania danych
              osobowych na stronie internetowej szymonzawrotny.pl.
              Administratorem danych osobowych jest Szymon Zawrotny, własciciel
              strony portfolio. <br />W sprawach związanych z przetwarzaniem
              danych osobowych możesz skontaktować się pod adresem e-mail:
              szymonzawrotny@gmail.com.
            </section>
            <section>
              <b>Zgoda na przetwarzanie danych.</b> Korzystając ze strony szymonzawrotny.pl, użytkownik wyraża zgodę na przetwarzanie swoich danych osobowych zgodnie z zasadami określonymi w niniejszej polityce prywatności.
            </section>
            <section>
              <b>Jakie dane są zbierane?</b> Na Stronie dostępny jest formularz
              kontaktowy, który umożliwia wysyłanie wiadomości e-mail. Podczas
              korzystania z formularza przetwarzany jest adres e-mail nadawcy
              oraz treść wiadomości. Dane te są wykorzystywane wyłącznie w celu
              kontaktu zwrotnego z nadawcą wiadomości.
            </section>
            <section>
              <b>Cel i podstawa przetwarzania danych.</b> Dane przetwarzane są w
              celu umożliwienia kontaktu z administratorem Strony - na podstawie
              art. 6 ust. 1 lit. f RODO, tj. prawnie uzasadnionego interesu,
              jakim jest prowadzenie korespondencji z użytkownikami.
            </section>
            <section>
              <b> Kto ma dostęp do danych?</b> Dane przesyłane przez formularz
              kontaktowy są przekazywane na adres e-mail administratora i nie są
              nigdzie dalej przechowywane, analizowane ani udostępniane osobom
              trzecim. Dane są przetwarzane na serwerach dostarczanych przez
              firmę Mikrus Sp. z o.o., która zapewnia infrastrukturę serwerową
              niezbędną do działania strony.
            </section>
            <section>
              <b>Jak długo dane są przechowywane?</b> Dane z formularza
              kontaktowego (czyli przesłane wiadomości) są przechowywane jedynie
              w skrzynce mailowej administratora przez okres niezbędny do
              odpowiedzi lub prowadzenia dalszej korespondencji, a następnie
              usuwane.{' '}
            </section>
            <section>
              <b>Pliki cookies.</b> Strona nie wykorzystuje plików cookies ani
              narzędzi śledzących.
            </section>
            <section>
              <b> Zmiany w Polityce Prywatności.</b> Polityka może być
              aktualizowana w związku z rozwojem strony lub zmianą przepisów
              prawa. Aktualna wersja będzie zawsze dostępna na tej stronie.
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Policy;
