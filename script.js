// 화폐 단위 정의
const GALLEON_TO_KNUT = 493;
const SICKLE_TO_KNUT = 29;

// 갈레온, 시클, 크넛을 모두 크넛으로 변환하는 함수
document.getElementById("convertToKnut").addEventListener("click", function() {
  const galleon = parseInt(document.getElementById("galleonToKnut").value) || 0;
  const sickle = parseInt(document.getElementById("sickleToKnut").value) || 0;
  const knut = parseInt(document.getElementById("knutToKnut").value) || 0;

  const totalKnut = (galleon * GALLEON_TO_KNUT) + (sickle * SICKLE_TO_KNUT) + knut;
  document.getElementById("knutResult").innerText = `총 크넛: ${totalKnut}`;
});

// 크넛을 갈레온, 시클, 크넛으로 변환하는 함수
document.getElementById("convertToOther").addEventListener("click", function() {
  let knut = parseInt(document.getElementById("knutToOther").value) || 0;

  const galleon = Math.floor(knut / GALLEON_TO_KNUT);
  knut = knut % GALLEON_TO_KNUT;
  const sickle = Math.floor(knut / SICKLE_TO_KNUT);
  knut = knut % SICKLE_TO_KNUT;

  document.getElementById("otherResult").innerText = `${galleon} 갈레온, ${sickle} 시클, ${knut} 크넛`;
});
