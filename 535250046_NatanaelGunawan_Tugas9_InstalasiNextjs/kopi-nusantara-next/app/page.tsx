"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";


export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
    const [visibleFaqs, setVisibleFaqs] = useState([false, false, false, false, false]);
    const [visibleSections, setVisibleSections] = useState([false, false, false, false, false]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsHeaderLoaded(true);
        }, 500);

        const handleScroll = () => {
            const position = window.scrollY;
            const screenHeight = window.innerHeight;
            const sections = document.querySelectorAll("section");
            const updatedVisibility = [false, false, false, false, false];

            for (let i = 1; i < sections.length; i++) {
                const topSection = sections[i].offsetTop;
                const bottomSection = topSection + sections[i].offsetHeight;
                if (position + screenHeight > topSection + 150 && position < bottomSection - 150) {
                    updatedVisibility[i - 1] = true;
                }
            }

            setVisibleSections(updatedVisibility);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleFaq = (index: number) => {
        const updatedFaqs = visibleFaqs.slice();
        updatedFaqs[index] = !updatedFaqs[index];
        setVisibleFaqs(updatedFaqs);
    };
    
    return (
        <>
            <nav className={styles.navbar}>
              <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img className={styles["hamburger-icon"]} src="/images/hamburger.png" alt="menu"/>
              </button>
              
              <div className={`${styles.navlinks} ${isMenuOpen ? styles.active : ""}`}>
                <a href="#home">Home</a>
                <a href="#bean">Beans</a>
                <a href="#bestSeller">Best Seller</a>
                <a href="#order">Order</a>
                <a href="#faq">FAQ</a>
                <a href="#about">About</a>
            </div>
            </nav>

            {/* Judul */}
            <section className={styles.header} id="home">
                <img className={styles.logo} src="/images/8.png" alt="logo" />

                <div className={`${styles["text-header"]} ${isHeaderLoaded ? styles.headerActive : ""}`}>
                    <img className={styles.bgrumah} src="/images/bg_kopi.png" alt="background" />
                    <h1>Kopi Nusantara</h1>
                    <p>Artisan coffee, rooted in the heart of the Nusantara.</p>
                    <p>It&apos;s more than just a coffee.</p>
                    <br/>
                    <p>Natanael Gunawan - 535250046</p>

                    {/* Semakin anaknya kebawah, dia layernya di atas */}
                </div>
            </section>

            {/* Biji Kopi */}
            <section className={`${styles.getToKnow} ${styles.fadeSection} ${visibleSections[0] ? styles.sectionVisible : ""}`} id="bean">
                <h1>Get to know our beans</h1>
                <p className={styles["desc-judul"]}> We&apos;re using a high quality beans that makes our coffee smooth.</p>

                <div className={styles["info-beans"]}>
                    <article>
                        <img className={styles.beans} src="/images/11.png" alt="beans"/>
                        <div className={styles["text-beans"]}>
                            <h2>Type of Coffee</h2>
                            <p>Biji kopi yang digunakan adalah tipe biji kopi Arabica dan Robusta lokal yang ditanam di Indonesia, Arabica cenderung memiliki rasa asam buah (lemon, jeruk, gula tebu) serta manis yang smooth, sedangkan kopi Robusta cenderung punya rasa yang lebih kuat dan pahit dari Arabica, rasanya cenderung coklat pahit (kakao) dan aroma seperti tembakau.</p>
                        </div>
                    </article>
                    <article>
                        <img className={styles.beans} src="/images/12.png" alt="beans"/>
                        <div className={styles["text-beans"]}>
                            <h2>Coffee Processing</h2>
                            <p>Kopi dengan aroma yang wangi & rasa yang enak tentu melalui proses yang tidak instan, mulai dari pengeringan setelah panen (pasca panen) yang beragam seperti proses natural, washed, honey, fermentation, dsb., setiap proses panen ini akan menghasilkan biji kopi berkuaitas dengan rasa dan aroma yang unik ketika diseduh.</p>
                        </div>
                    </article>
                    <article>
                        <img className={styles.beans} src="/images/13.png" alt="beans"/>
                        <div className={styles["text-beans"]}>
                            <h2>We only using Good Beans</h2>
                            <p>Produk Kopi Nusantara hanya gunakan biji kopi berkualitas, sourcing langsung dari lahan panen petani. Sehingga, biji kopi ketika disangrai & diseduh akan ngeluarin aroma wangi, harum, dan warna biji kopi berubah jadi coklat muda yang rata.</p>
                        </div>
                    </article>
                    <article>
                        <img className={styles.beans} src="/images/14.png" alt="beans"/>
                        <div className={styles["text-beans"]}>
                            <h2>Fresh Roasted Guarantee</h2>
                            <p>Biji kopi segar kami sangrai (roasting) dengan tingkat kematangan yang pas, misal Arabica akan kami sangrai di tingkat kematangan sedang (medium), jadi ketika diseduh akan mengeluarkan aroma wangi buah, rempah-rempah, dan ketika diminum tidak terlalu asam dan applicable untuk seduhan manual, kopi susu maupun dibuat espresso.</p>
                        </div>
                    </article>
                </div>
            </section>

            {/* Best Seller */}
            <section className={`${styles.bestSeller} ${styles.fadeSection} ${visibleSections[1] ? styles.sectionVisible : ""}`} id="bestSeller">
                <h1>Best Seller</h1>
                <p className={styles["desc-judul"]}>Sold up to 1000+</p>

                <div className={styles.menuBest}>
                    <article>
                        <img className={styles.menu} src="/images/2.png" alt="americano"/>
                        <div className={styles["info-best"]}>
                            <h2>Americano</h2>
                            <p>Espresso dengan tambahan air panas, menghasilkan rasa kopi yang ringan, clean, dan tetap memiliki karakter khas espresso.</p>
                        </div>
                    </article>
                    <article>
                        <img className={styles.menu} src="/images/3.png" alt="flat white"/>
                        <div className={styles["info-best"]}>
                            <h2>Flat White</h2>
                            <p>Espresso yang dipadukan dengan steamed milk bertekstur lembut, menghasilkan rasa kopi yang creamy dengan cita rasa espresso yang tetap terasa kuat.</p>
                        </div>
                    </article>
                    <article>
                        <img className={styles.menu} src="/images/4.png" alt="caramel macchiato"/>
                        <div className={styles["info-best"]}>
                            <h2>Caramel Macchiato</h2>
                            <p>Perpaduan espresso, susu lembut, dan manisnya saus karamel yang memberikan rasa creamy dan sedikit manis.</p>
                        </div>
                    </article>
                    <article>
                        <img className={styles.menu} src="/images/5.png" alt="sea salt latte"/>
                        <div className={styles["info-best"]}>
                            <h2>Sea Salt Latte</h2>
                            <p>Latte creamy dengan sentuhan foam sea salt yang gurih dan lembut, menciptakan perpaduan rasa manis, creamy, dan sedikit asin yang unik.</p>
                        </div>
                    </article>
                </div>
            </section>

            {/* Order */}
            <section className={`${styles.order} ${styles.fadeSection} ${visibleSections[2] ? styles.sectionVisible : ""}`} id="order">
                <h1>Order Now</h1>
                <p className={styles["desc-judul"]}>Order our coffee to get that authentic taste</p>
                <div className={styles["konten-order"]}>
                    <div className={styles.gif}>
                        <img src="/images/2.png" alt="kopi"/>
                    </div>
                    <div className={styles["text-order"]}>
                        <h2>Interested With Our Coffee?</h2>
                        <p className={styles["desc-order"]}>Discover the rich aroma and delightful flavors in every cup we serve. From bold espresso to creamy and sweet favorites, there’s always a coffee waiting to match your taste. Come by, take a sip, and find your new favorite coffee with us!</p>
                        <a href="https://wa.me/6281211778207?text=Hi%2C%20I%27d%20like%20to%20order%20your%20coffee" target="_blank">
                            <button className={styles.noWa}>ORDER NOW</button>
                        </a>
                    </div>
                </div>
            </section>

            {/*  Bagian Frequently Asked  */}
            <section className={`${styles.freqAsk} ${styles.fadeSection} ${visibleSections[3] ? styles.sectionVisible : ""}`} id="faq">
                <h1>Frequently Asked Question</h1>
                <div className={styles.faqs}>
                    <div className={styles.question} onClick={() => handleFaq(0)}>
                        <p>1. Jenis biji kopi apa saja yang digunakan oleh Kopi Nusantara dan bagaimana karakteristik rasanya?</p>
                    </div>
                    <div className={`${styles.answer} ${visibleFaqs[0] ? styles.open : ""}`}>
                        <p>Kopi Nusantara menggunakan dua jenis biji kopi lokal yang ditanam di Indonesia, yaitu:</p>
                        <ol>
                            <li><strong>Arabica</strong> &mdash; cenderung memiliki rasa asam buah (lemon, jeruk, gula tebu) serta rasa manis yang smooth.</li>
                            <li><strong>Robusta</strong> &mdash; memiliki rasa yang lebih kuat dan lebih pahit dibanding Arabica, dengan kecenderungan rasa coklat pahit (kakao) serta aroma tembakau.</li>
                        </ol>
                    </div>

                    <div className={styles.question} onClick={() => handleFaq(1)}>
                      <p>2. Bagaimana tahapan proses pengolahan kopi dari kebun hingga siap diminum (From Farm to Cup)?</p>
                    </div>
                    <div className={`${styles.answer} ${visibleFaqs[1] ? styles.open : ""}`}>
                        <p>Kopi melewati 6 tahapan utama:</p>
                        <ol>
                            <li>Panen buah kopi (petik) dari petani.</li>
                            <li>Pengeringan/penjemuran pasca panen (proses natural, washed, honey, fermentation, dsb.).</li>
                            <li>Sorting &mdash; menyortir biji yang bagus dan membuang biji yang jelek.</li>
                            <li>Roasting (penyangraian).</li>
                            <li>Grinding (penggilingan kopi).</li>
                            <li>Brewing (penyeduhan menggunakan alat manual atau tradisional).</li>
                        </ol>
                    </div>

                    <div className={styles.question} onClick={() => handleFaq(2)}>
                      <p>3. Apa perbedaan ciri-ciri biji kopi berkualitas baik yang digunakan dengan biji kopi cacat yang dihindari?</p>
                    </div>
                    <div className={`${styles.answer} ${visibleFaqs[2] ? styles.open : ""}`}>
                        <p><strong>Biji berkualitas baik:</strong> berwarna kehijauan bersih, bentuk utuh, ukuran sama rata, dan tidak berbau. Saat disangrai dan diseduh menghasilkan aroma wangi, harum, serta warna coklat muda yang merata.</p>
                        <p><strong>Biji cacat/buruk:</strong> biji pecah atau tidak utuh, berlubang bekas hama serangga, biji hitam (black beans), serta kopong atau berbercak jamur. Jika diseduh, biji cacat beraroma apek, bau tanah, dan rasanya seperti rumput mentah.</p>
                    </div>

                    <div className={styles.question} onClick={() => handleFaq(3)}>
                        <p>4. Bagaimana tingkat kematangan sangrai (roasting) untuk kopi Arabica di Kopi Nusantara dan apa hasil rasanya?</p>
                    </div>
                    <div className={`${styles.answer} ${visibleFaqs[3] ? styles.open : ""}`}>
                        <p>Kopi Arabica disangrai pada tingkat kematangan sedang (medium). Hasilnya, saat diseduh kopi akan mengeluarkan aroma wangi buah dan rempah-rempah, rasanya tidak terlalu asam, serta cocok diaplikasikan untuk seduhan manual, kopi susu, maupun espresso.</p>
                    </div>
                    
                    <div className={styles.question} onClick={() => handleFaq(4)}>
                      <p>5. Berapa lama masa simpan biji kopi setelah selesai di-roasting dan apa yang terjadi jika melewati batas waktu tersebut?</p>
                    </div>
                    <div className={`${styles.answer} ${visibleFaqs[4] ? styles.open : ""}`}>
                        <p>Biji kopi segar hasil sangrai memiliki masa penyimpanan bertahan hingga sekitar 4 bulan. Jika disimpan lebih dari 4 bulan, aroma dan rasa kopi akan mulai menurun, aroma wanginya berkurang, serta rasanya perlahan menjadi hambar saat diseduh.</p>
                    </div>
                </div>
            </section>

            {/* Bagian Penutup & pengenalan Profile */}
            <section className={`${styles.penutup} ${styles.fadeSection} ${visibleSections[4] ? styles.sectionVisible : ""}`} id="about">
                <h1>About Us</h1>
                <div className={styles["nama-anggota"]}>
                    <p className={styles.descAbUs}>Originally, from the Nusantara,
                        <br />
                        Kopi Nusantara &mdash; Kelompok 5
                    </p>
                    <p className={styles.anggota}>Gabriella Geraldine (535250023)</p>
                    <p className={styles.anggota}>Reyhan Janstephen (535250034)</p>
                    <p className={styles.anggota}>Monica Irene (535250041)</p>
                    <p className={styles.anggota}>Natanael Gunawan (535250046)</p>
                    <p className={styles.anggota}>Moses Marvian Arsata (535250050)</p>
                </div>
                <footer>
                    <p>&copy; 2026 Kopi Nusantara. Seluruh hak cipta dilindungi.</p>
                    <p>Dibuat sebagai contoh proyek Tugas Studi Kasus -- Responsive UI (Front-End Programming).</p>
                </footer>
            </section>
        </>
    );
}
