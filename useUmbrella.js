/**
 * 假设程序员L每天需要在家和公司间往返，
 * 一开始公司放了一把大伞家放了一把小伞，
 * 当下雨时L会带上雨伞，而后在下一次出行中不管是否下雨L都会将一把雨伞带回原地，
 * 假设在家出发下雨的概率为10%，在公司出发下雨的概率为70%，
 * 想要在下雨时尽可能的用到大的雨伞，现有两种策略：
 * 1、下雨时如果从公司出发始终使用大伞，并在下一次出行中将大伞那回公司，从家出发则使用小伞并在下一次出行中将小伞那回家
 * 2、下雨时尽可能的使用大伞，不下雨时如果需要将伞拿回原地将大伞拿回公司、小伞拿回家
 * 请问哪种策略下雨时大伞利用率比较高？
 */

function randomWeb(atCompany) {
  const rand = Math.random()
  if (atCompany) {
    return rand < .8
  }
  return rand < .2
}

function mockOuting(loopCount = 1000) {
  let rainCount = 0
  let rainAtHomeCount = 0
  let rainAtCompanyCount = 0
  let rainUseBigCount = 0
  let rainUseSmallCount = 0

  let playerPlace = 0 // 0 home, 1 company
  let umbrellaState = 0b10 // _ _, bit 1 at company 0 at home, p0 small p1 big

  for (let i = 0; i < loopCount; i++) {
    const raining = randomWeb(playerPlace & 1)
    const [useBig, newState] = useUmbrella1(playerPlace === 0, umbrellaState, raining)
    if (raining) {
      // raining
      if (useBig) {
        rainUseBigCount++
      } else {
        rainUseSmallCount++
      }
      rainCount++
      if (playerPlace & 1) {
        rainAtCompanyCount++
      } else {
        rainAtHomeCount++
      }
    }
    // finish
    umbrellaState = newState
    playerPlace = (playerPlace + 1) & 1
  }
  const useRate = rainUseBigCount / rainCount
  return useRate

}


function useUmbrella1(toCompany, umbrellaState, raining) {
  let useBig = false
  let newState = umbrellaState
  if (!raining) {
    if (toCompany && umbrellaState === 0b00) {
      newState = 0b10
    }
    if (!toCompany && umbrellaState === 0b11) {
      newState = 0b10
    }
    return [useBig, newState]
  }
  if (toCompany) {
    if (umbrellaState & 0b10 === 0) {
      useBig = true
      newState = umbrellaState | 0b10
    } else {
      useBig = false
      newState = umbrellaState | 0b01
    }
  } else {
    if (umbrellaState & 0b01) {
      useBig = false
      newState = umbrellaState & 0b10
    } else {
      useBig = true
      newState = umbrellaState & 0b01
    }
  }
  return [useBig, newState]
}

function useUmbrella2(toCompany, umbrellaState, raining) {
  let useBig = false
  let newState = umbrellaState
  if (!raining) {
    if (toCompany && umbrellaState === 0b00) {
      newState = 0b10
    }
    if (!toCompany && umbrellaState === 0b11) {
      newState = 0b10
    }
    return [useBig, newState]
  }
  if (toCompany) {
    if (umbrellaState & 0b10 === 0) {
      useBig = true
      newState = umbrellaState | 0b10
    } else {
      useBig = false
      newState = umbrellaState | 0b01
    }
  } else {
    if (umbrellaState & 0b10) {
      useBig = true
      newState = umbrellaState & 0b01
    } else {
      useBig = false
      newState = umbrellaState & 0b10
    }
  }
  return [useBig, newState]
}

// run

mockOuting(1000000)