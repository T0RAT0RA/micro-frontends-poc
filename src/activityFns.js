export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/#/${prefix}`) !== -1
    )
  )
}

export function sidebar(location) {
  return true
}

export function header(location) {
  return true
}

export function clients(location) {
  return prefix(location, 'clients')
}

export function accounting(location) {
  return prefix(location, 'accounting')
}