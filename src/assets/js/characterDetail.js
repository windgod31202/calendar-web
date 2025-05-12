function getQueryParam(key) {
    return new URLSearchParams(window.location.search).get(key);
  }
  
  const id = getQueryParam('id');
  if (id) {
    fetch(`data/characters/${id}.json`)
      .then(res => res.json())
      .then(data => {
        document.getElementById('characterName').textContent = data.name;
        document.getElementById('characterLevel').textContent = data.level;
        document.getElementById('characterSkills').textContent = data.skills;
        document.getElementById('characterEquipment').textContent = data.equipment;
      })
      .catch(() => {
        document.body.innerHTML = `<p>找不到角色資料</p>`;
      });
  }
  