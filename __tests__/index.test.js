import stringify from '../src';
import cases from 'jest-in-case';

it('works', () => {
  const str = stringify({
    _type: 'File',
    attrs: [],
    items: [
      {
        _type: 'ItemEnum',
        attrs: [],
        vis: {
          _type: 'VisPublic',
          pub_token: {
            _type: 'Pub',
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 1,
                column: 0
              },
              end: {
                _type: 'LineColumn',
                line: 1,
                column: 3
              }
            }
          },
          span: {
            _type: 'Span',
            start: {
              _type: 'LineColumn',
              line: 1,
              column: 0
            },
            end: {
              _type: 'LineColumn',
              line: 1,
              column: 3
            }
          }
        },
        enum_token: {
          _type: 'Enum',
          span: {
            _type: 'Span',
            start: {
              _type: 'LineColumn',
              line: 1,
              column: 4
            },
            end: {
              _type: 'LineColumn',
              line: 1,
              column: 8
            }
          }
        },
        ident: {
          _type: 'Ident',
          to_string: 'ExecuteMsg',
          span: {
            _type: 'Span',
            start: {
              _type: 'LineColumn',
              line: 1,
              column: 9
            },
            end: {
              _type: 'LineColumn',
              line: 1,
              column: 19
            }
          }
        },
        generics: {
          _type: 'Generics',
          lt_token: {
            _type: 'Lt',
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 1,
                column: 19
              },
              end: {
                _type: 'LineColumn',
                line: 1,
                column: 20
              }
            }
          },
          params: {
            0: {
              _type: 'TypeParam',
              attrs: [],
              ident: {
                _type: 'Ident',
                to_string: 'T',
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 1,
                    column: 20
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 1,
                    column: 21
                  }
                }
              },
              bounds: {
                _type: 'Punctuated',
                length: 0
              },
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 1,
                  column: 20
                },
                end: {
                  _type: 'LineColumn',
                  line: 1,
                  column: 21
                }
              }
            },
            _type: 'Punctuated',
            length: 1
          },
          gt_token: {
            _type: 'Gt',
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 1,
                column: 21
              },
              end: {
                _type: 'LineColumn',
                line: 1,
                column: 22
              }
            }
          },
          span: {
            _type: 'Span',
            start: {
              _type: 'LineColumn',
              line: 1,
              column: 19
            },
            end: {
              _type: 'LineColumn',
              line: 1,
              column: 22
            }
          }
        },
        variants: {
          0: {
            _type: 'Variant',
            attrs: [
              {
                _type: 'Attribute',
                pound_token: {
                  _type: 'Pound',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 2,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 2,
                      column: 96
                    }
                  }
                },
                style: {
                  _type: 'AttrStyle::Outer'
                },
                path: {
                  _type: 'Path',
                  segments: {
                    0: {
                      _type: 'PathSegment',
                      ident: {
                        _type: 'Ident',
                        to_string: 'doc',
                        span: {
                          _type: 'Span',
                          start: {
                            _type: 'LineColumn',
                            line: 2,
                            column: 4
                          },
                          end: {
                            _type: 'LineColumn',
                            line: 2,
                            column: 96
                          }
                        }
                      },
                      arguments: {
                        _type: 'PathArguments::None'
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 2,
                          column: 4
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 2,
                          column: 96
                        }
                      }
                    },
                    _type: 'Punctuated',
                    length: 1
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 2,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 2,
                      column: 96
                    }
                  }
                },
                tokens: {
                  0: {
                    _type: 'Punct',
                    as_char: '=',
                    spacing: {
                      _type: 'Spacing::Alone'
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 2,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 2,
                        column: 96
                      }
                    }
                  },
                  1: {
                    _type: 'Literal',
                    to_string:
                      '" Transfer is a base message to move a token to another account without triggering actions"',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 2,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 2,
                        column: 96
                      }
                    }
                  },
                  _type: 'TokenStream',
                  length: 2
                },
                bracket_token: {
                  _type: 'Bracket',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 2,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 2,
                      column: 96
                    }
                  }
                },
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 2,
                    column: 4
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 2,
                    column: 96
                  }
                }
              }
            ],
            ident: {
              _type: 'Ident',
              to_string: 'TransferNft',
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 3,
                  column: 4
                },
                end: {
                  _type: 'LineColumn',
                  line: 3,
                  column: 15
                }
              }
            },
            fields: {
              _type: 'FieldsNamed',
              named: {
                0: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'recipient',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 18
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 27
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 27
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 28
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'String',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 3,
                                column: 29
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 3,
                                column: 35
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 3,
                              column: 29
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 3,
                              column: 35
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 3,
                          column: 29
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 3,
                          column: 35
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 29
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 35
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 3,
                      column: 18
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 3,
                      column: 35
                    }
                  }
                },
                1: {
                  _type: 'Comma',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 3,
                      column: 35
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 3,
                      column: 36
                    }
                  }
                },
                2: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'token_id',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 37
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 45
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 45
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 46
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'String',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 3,
                                column: 47
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 3,
                                column: 53
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 3,
                              column: 47
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 3,
                              column: 53
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 3,
                          column: 47
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 3,
                          column: 53
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 47
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 3,
                        column: 53
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 3,
                      column: 37
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 3,
                      column: 53
                    }
                  }
                },
                _type: 'Punctuated',
                length: 3
              },
              brace_token: {
                _type: 'Brace',
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 3,
                    column: 16
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 3,
                    column: 55
                  }
                }
              },
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 3,
                  column: 16
                },
                end: {
                  _type: 'LineColumn',
                  line: 3,
                  column: 55
                }
              }
            },
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 2,
                column: 4
              },
              end: {
                _type: 'LineColumn',
                line: 3,
                column: 55
              }
            }
          },
          1: {
            _type: 'Comma',
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 3,
                column: 55
              },
              end: {
                _type: 'LineColumn',
                line: 3,
                column: 56
              }
            }
          },
          2: {
            _type: 'Variant',
            attrs: [
              {
                _type: 'Attribute',
                pound_token: {
                  _type: 'Pound',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 4,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 4,
                      column: 86
                    }
                  }
                },
                style: {
                  _type: 'AttrStyle::Outer'
                },
                path: {
                  _type: 'Path',
                  segments: {
                    0: {
                      _type: 'PathSegment',
                      ident: {
                        _type: 'Ident',
                        to_string: 'doc',
                        span: {
                          _type: 'Span',
                          start: {
                            _type: 'LineColumn',
                            line: 4,
                            column: 4
                          },
                          end: {
                            _type: 'LineColumn',
                            line: 4,
                            column: 86
                          }
                        }
                      },
                      arguments: {
                        _type: 'PathArguments::None'
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 4,
                          column: 4
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 4,
                          column: 86
                        }
                      }
                    },
                    _type: 'Punctuated',
                    length: 1
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 4,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 4,
                      column: 86
                    }
                  }
                },
                tokens: {
                  0: {
                    _type: 'Punct',
                    as_char: '=',
                    spacing: {
                      _type: 'Spacing::Alone'
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 4,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 4,
                        column: 86
                      }
                    }
                  },
                  1: {
                    _type: 'Literal',
                    to_string:
                      '" Send is a base message to transfer a token to a contract and trigger an action"',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 4,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 4,
                        column: 86
                      }
                    }
                  },
                  _type: 'TokenStream',
                  length: 2
                },
                bracket_token: {
                  _type: 'Bracket',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 4,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 4,
                      column: 86
                    }
                  }
                },
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 4,
                    column: 4
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 4,
                    column: 86
                  }
                }
              },
              {
                _type: 'Attribute',
                pound_token: {
                  _type: 'Pound',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 5,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 5,
                      column: 34
                    }
                  }
                },
                style: {
                  _type: 'AttrStyle::Outer'
                },
                path: {
                  _type: 'Path',
                  segments: {
                    0: {
                      _type: 'PathSegment',
                      ident: {
                        _type: 'Ident',
                        to_string: 'doc',
                        span: {
                          _type: 'Span',
                          start: {
                            _type: 'LineColumn',
                            line: 5,
                            column: 4
                          },
                          end: {
                            _type: 'LineColumn',
                            line: 5,
                            column: 34
                          }
                        }
                      },
                      arguments: {
                        _type: 'PathArguments::None'
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 5,
                          column: 4
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 5,
                          column: 34
                        }
                      }
                    },
                    _type: 'Punctuated',
                    length: 1
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 5,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 5,
                      column: 34
                    }
                  }
                },
                tokens: {
                  0: {
                    _type: 'Punct',
                    as_char: '=',
                    spacing: {
                      _type: 'Spacing::Alone'
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 5,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 5,
                        column: 34
                      }
                    }
                  },
                  1: {
                    _type: 'Literal',
                    to_string: '" on the receiving contract."',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 5,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 5,
                        column: 34
                      }
                    }
                  },
                  _type: 'TokenStream',
                  length: 2
                },
                bracket_token: {
                  _type: 'Bracket',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 5,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 5,
                      column: 34
                    }
                  }
                },
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 5,
                    column: 4
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 5,
                    column: 34
                  }
                }
              }
            ],
            ident: {
              _type: 'Ident',
              to_string: 'SendNft',
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 6,
                  column: 4
                },
                end: {
                  _type: 'LineColumn',
                  line: 6,
                  column: 11
                }
              }
            },
            fields: {
              _type: 'FieldsNamed',
              named: {
                0: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'contract',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 7,
                        column: 8
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 7,
                        column: 16
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 7,
                        column: 16
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 7,
                        column: 17
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'String',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 7,
                                column: 18
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 7,
                                column: 24
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 7,
                              column: 18
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 7,
                              column: 24
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 7,
                          column: 18
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 7,
                          column: 24
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 7,
                        column: 18
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 7,
                        column: 24
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 7,
                      column: 8
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 7,
                      column: 24
                    }
                  }
                },
                1: {
                  _type: 'Comma',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 7,
                      column: 24
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 7,
                      column: 25
                    }
                  }
                },
                2: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'token_id',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 8,
                        column: 8
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 8,
                        column: 16
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 8,
                        column: 16
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 8,
                        column: 17
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'String',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 8,
                                column: 18
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 8,
                                column: 24
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 8,
                              column: 18
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 8,
                              column: 24
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 8,
                          column: 18
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 8,
                          column: 24
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 8,
                        column: 18
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 8,
                        column: 24
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 8,
                      column: 8
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 8,
                      column: 24
                    }
                  }
                },
                3: {
                  _type: 'Comma',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 8,
                      column: 24
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 8,
                      column: 25
                    }
                  }
                },
                4: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'msg',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 9,
                        column: 8
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 9,
                        column: 11
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 9,
                        column: 11
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 9,
                        column: 12
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'Binary',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 9,
                                column: 13
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 9,
                                column: 19
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 9,
                              column: 13
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 9,
                              column: 19
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 9,
                          column: 13
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 9,
                          column: 19
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 9,
                        column: 13
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 9,
                        column: 19
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 9,
                      column: 8
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 9,
                      column: 19
                    }
                  }
                },
                5: {
                  _type: 'Comma',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 9,
                      column: 19
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 9,
                      column: 20
                    }
                  }
                },
                _type: 'Punctuated',
                length: 6
              },
              brace_token: {
                _type: 'Brace',
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 6,
                    column: 12
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 10,
                    column: 5
                  }
                }
              },
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 6,
                  column: 12
                },
                end: {
                  _type: 'LineColumn',
                  line: 10,
                  column: 5
                }
              }
            },
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 4,
                column: 4
              },
              end: {
                _type: 'LineColumn',
                line: 10,
                column: 5
              }
            }
          },
          3: {
            _type: 'Comma',
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 10,
                column: 5
              },
              end: {
                _type: 'LineColumn',
                line: 10,
                column: 6
              }
            }
          },
          4: {
            _type: 'Variant',
            attrs: [
              {
                _type: 'Attribute',
                pound_token: {
                  _type: 'Pound',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 11,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 11,
                      column: 78
                    }
                  }
                },
                style: {
                  _type: 'AttrStyle::Outer'
                },
                path: {
                  _type: 'Path',
                  segments: {
                    0: {
                      _type: 'PathSegment',
                      ident: {
                        _type: 'Ident',
                        to_string: 'doc',
                        span: {
                          _type: 'Span',
                          start: {
                            _type: 'LineColumn',
                            line: 11,
                            column: 4
                          },
                          end: {
                            _type: 'LineColumn',
                            line: 11,
                            column: 78
                          }
                        }
                      },
                      arguments: {
                        _type: 'PathArguments::None'
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 11,
                          column: 4
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 11,
                          column: 78
                        }
                      }
                    },
                    _type: 'Punctuated',
                    length: 1
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 11,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 11,
                      column: 78
                    }
                  }
                },
                tokens: {
                  0: {
                    _type: 'Punct',
                    as_char: '=',
                    spacing: {
                      _type: 'Spacing::Alone'
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 11,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 11,
                        column: 78
                      }
                    }
                  },
                  1: {
                    _type: 'Literal',
                    to_string:
                      '" Allows operator to transfer / send the token from the owner\'s account."',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 11,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 11,
                        column: 78
                      }
                    }
                  },
                  _type: 'TokenStream',
                  length: 2
                },
                bracket_token: {
                  _type: 'Bracket',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 11,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 11,
                      column: 78
                    }
                  }
                },
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 11,
                    column: 4
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 11,
                    column: 78
                  }
                }
              },
              {
                _type: 'Attribute',
                pound_token: {
                  _type: 'Pound',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 12,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 12,
                      column: 73
                    }
                  }
                },
                style: {
                  _type: 'AttrStyle::Outer'
                },
                path: {
                  _type: 'Path',
                  segments: {
                    0: {
                      _type: 'PathSegment',
                      ident: {
                        _type: 'Ident',
                        to_string: 'doc',
                        span: {
                          _type: 'Span',
                          start: {
                            _type: 'LineColumn',
                            line: 12,
                            column: 4
                          },
                          end: {
                            _type: 'LineColumn',
                            line: 12,
                            column: 73
                          }
                        }
                      },
                      arguments: {
                        _type: 'PathArguments::None'
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 12,
                          column: 4
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 12,
                          column: 73
                        }
                      }
                    },
                    _type: 'Punctuated',
                    length: 1
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 12,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 12,
                      column: 73
                    }
                  }
                },
                tokens: {
                  0: {
                    _type: 'Punct',
                    as_char: '=',
                    spacing: {
                      _type: 'Spacing::Alone'
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 12,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 12,
                        column: 73
                      }
                    }
                  },
                  1: {
                    _type: 'Literal',
                    to_string:
                      '" If expiration is set, then this allowance has a time/height limit"',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 12,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 12,
                        column: 73
                      }
                    }
                  },
                  _type: 'TokenStream',
                  length: 2
                },
                bracket_token: {
                  _type: 'Bracket',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 12,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 12,
                      column: 73
                    }
                  }
                },
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 12,
                    column: 4
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 12,
                    column: 73
                  }
                }
              }
            ],
            ident: {
              _type: 'Ident',
              to_string: 'Approve',
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 13,
                  column: 4
                },
                end: {
                  _type: 'LineColumn',
                  line: 13,
                  column: 11
                }
              }
            },
            fields: {
              _type: 'FieldsNamed',
              named: {
                0: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'spender',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 14,
                        column: 8
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 14,
                        column: 15
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 14,
                        column: 15
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 14,
                        column: 16
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'String',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 14,
                                column: 17
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 14,
                                column: 23
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 14,
                              column: 17
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 14,
                              column: 23
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 14,
                          column: 17
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 14,
                          column: 23
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 14,
                        column: 17
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 14,
                        column: 23
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 14,
                      column: 8
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 14,
                      column: 23
                    }
                  }
                },
                1: {
                  _type: 'Comma',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 14,
                      column: 23
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 14,
                      column: 24
                    }
                  }
                },
                2: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'token_id',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 15,
                        column: 8
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 15,
                        column: 16
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 15,
                        column: 16
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 15,
                        column: 17
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'String',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 15,
                                column: 18
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 15,
                                column: 24
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 15,
                              column: 18
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 15,
                              column: 24
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 15,
                          column: 18
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 15,
                          column: 24
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 15,
                        column: 18
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 15,
                        column: 24
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 15,
                      column: 8
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 15,
                      column: 24
                    }
                  }
                },
                3: {
                  _type: 'Comma',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 15,
                      column: 24
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 15,
                      column: 25
                    }
                  }
                },
                4: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'expires',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 16,
                        column: 8
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 16,
                        column: 15
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 16,
                        column: 15
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 16,
                        column: 16
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'Option',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 16,
                                column: 17
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 16,
                                column: 23
                              }
                            }
                          },
                          arguments: {
                            _type: 'AngleBracketedGenericArguments',
                            lt_token: {
                              _type: 'Lt',
                              span: {
                                _type: 'Span',
                                start: {
                                  _type: 'LineColumn',
                                  line: 16,
                                  column: 23
                                },
                                end: {
                                  _type: 'LineColumn',
                                  line: 16,
                                  column: 24
                                }
                              }
                            },
                            args: {
                              0: {
                                _type: 'TypePath',
                                path: {
                                  _type: 'Path',
                                  segments: {
                                    0: {
                                      _type: 'PathSegment',
                                      ident: {
                                        _type: 'Ident',
                                        to_string: 'Expiration',
                                        span: {
                                          _type: 'Span',
                                          start: {
                                            _type: 'LineColumn',
                                            line: 16,
                                            column: 24
                                          },
                                          end: {
                                            _type: 'LineColumn',
                                            line: 16,
                                            column: 34
                                          }
                                        }
                                      },
                                      arguments: {
                                        _type: 'PathArguments::None'
                                      },
                                      span: {
                                        _type: 'Span',
                                        start: {
                                          _type: 'LineColumn',
                                          line: 16,
                                          column: 24
                                        },
                                        end: {
                                          _type: 'LineColumn',
                                          line: 16,
                                          column: 34
                                        }
                                      }
                                    },
                                    _type: 'Punctuated',
                                    length: 1
                                  },
                                  span: {
                                    _type: 'Span',
                                    start: {
                                      _type: 'LineColumn',
                                      line: 16,
                                      column: 24
                                    },
                                    end: {
                                      _type: 'LineColumn',
                                      line: 16,
                                      column: 34
                                    }
                                  }
                                },
                                span: {
                                  _type: 'Span',
                                  start: {
                                    _type: 'LineColumn',
                                    line: 16,
                                    column: 24
                                  },
                                  end: {
                                    _type: 'LineColumn',
                                    line: 16,
                                    column: 34
                                  }
                                }
                              },
                              _type: 'Punctuated',
                              length: 1
                            },
                            gt_token: {
                              _type: 'Gt',
                              span: {
                                _type: 'Span',
                                start: {
                                  _type: 'LineColumn',
                                  line: 16,
                                  column: 34
                                },
                                end: {
                                  _type: 'LineColumn',
                                  line: 16,
                                  column: 35
                                }
                              }
                            },
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 16,
                                column: 23
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 16,
                                column: 35
                              }
                            }
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 16,
                              column: 17
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 16,
                              column: 35
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 16,
                          column: 17
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 16,
                          column: 35
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 16,
                        column: 17
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 16,
                        column: 35
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 16,
                      column: 8
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 16,
                      column: 35
                    }
                  }
                },
                5: {
                  _type: 'Comma',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 16,
                      column: 35
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 16,
                      column: 36
                    }
                  }
                },
                _type: 'Punctuated',
                length: 6
              },
              brace_token: {
                _type: 'Brace',
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 13,
                    column: 12
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 17,
                    column: 5
                  }
                }
              },
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 13,
                  column: 12
                },
                end: {
                  _type: 'LineColumn',
                  line: 17,
                  column: 5
                }
              }
            },
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 11,
                column: 4
              },
              end: {
                _type: 'LineColumn',
                line: 17,
                column: 5
              }
            }
          },
          5: {
            _type: 'Comma',
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 17,
                column: 5
              },
              end: {
                _type: 'LineColumn',
                line: 17,
                column: 6
              }
            }
          },
          6: {
            _type: 'Variant',
            attrs: [
              {
                _type: 'Attribute',
                pound_token: {
                  _type: 'Pound',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 18,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 18,
                      column: 42
                    }
                  }
                },
                style: {
                  _type: 'AttrStyle::Outer'
                },
                path: {
                  _type: 'Path',
                  segments: {
                    0: {
                      _type: 'PathSegment',
                      ident: {
                        _type: 'Ident',
                        to_string: 'doc',
                        span: {
                          _type: 'Span',
                          start: {
                            _type: 'LineColumn',
                            line: 18,
                            column: 4
                          },
                          end: {
                            _type: 'LineColumn',
                            line: 18,
                            column: 42
                          }
                        }
                      },
                      arguments: {
                        _type: 'PathArguments::None'
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 18,
                          column: 4
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 18,
                          column: 42
                        }
                      }
                    },
                    _type: 'Punctuated',
                    length: 1
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 18,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 18,
                      column: 42
                    }
                  }
                },
                tokens: {
                  0: {
                    _type: 'Punct',
                    as_char: '=',
                    spacing: {
                      _type: 'Spacing::Alone'
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 18,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 18,
                        column: 42
                      }
                    }
                  },
                  1: {
                    _type: 'Literal',
                    to_string: '" Remove previously granted Approval"',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 18,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 18,
                        column: 42
                      }
                    }
                  },
                  _type: 'TokenStream',
                  length: 2
                },
                bracket_token: {
                  _type: 'Bracket',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 18,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 18,
                      column: 42
                    }
                  }
                },
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 18,
                    column: 4
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 18,
                    column: 42
                  }
                }
              }
            ],
            ident: {
              _type: 'Ident',
              to_string: 'Revoke',
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 19,
                  column: 4
                },
                end: {
                  _type: 'LineColumn',
                  line: 19,
                  column: 10
                }
              }
            },
            fields: {
              _type: 'FieldsNamed',
              named: {
                0: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'spender',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 13
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 20
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 20
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 21
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'String',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 19,
                                column: 22
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 19,
                                column: 28
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 19,
                              column: 22
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 19,
                              column: 28
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 19,
                          column: 22
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 19,
                          column: 28
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 22
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 28
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 19,
                      column: 13
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 19,
                      column: 28
                    }
                  }
                },
                1: {
                  _type: 'Comma',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 19,
                      column: 28
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 19,
                      column: 29
                    }
                  }
                },
                2: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'token_id',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 30
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 38
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 38
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 39
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'String',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 19,
                                column: 40
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 19,
                                column: 46
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 19,
                              column: 40
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 19,
                              column: 46
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 19,
                          column: 40
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 19,
                          column: 46
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 40
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 19,
                        column: 46
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 19,
                      column: 30
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 19,
                      column: 46
                    }
                  }
                },
                _type: 'Punctuated',
                length: 3
              },
              brace_token: {
                _type: 'Brace',
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 19,
                    column: 11
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 19,
                    column: 48
                  }
                }
              },
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 19,
                  column: 11
                },
                end: {
                  _type: 'LineColumn',
                  line: 19,
                  column: 48
                }
              }
            },
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 18,
                column: 4
              },
              end: {
                _type: 'LineColumn',
                line: 19,
                column: 48
              }
            }
          },
          7: {
            _type: 'Comma',
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 19,
                column: 48
              },
              end: {
                _type: 'LineColumn',
                line: 19,
                column: 49
              }
            }
          },
          8: {
            _type: 'Variant',
            attrs: [
              {
                _type: 'Attribute',
                pound_token: {
                  _type: 'Pound',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 20,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 20,
                      column: 78
                    }
                  }
                },
                style: {
                  _type: 'AttrStyle::Outer'
                },
                path: {
                  _type: 'Path',
                  segments: {
                    0: {
                      _type: 'PathSegment',
                      ident: {
                        _type: 'Ident',
                        to_string: 'doc',
                        span: {
                          _type: 'Span',
                          start: {
                            _type: 'LineColumn',
                            line: 20,
                            column: 4
                          },
                          end: {
                            _type: 'LineColumn',
                            line: 20,
                            column: 78
                          }
                        }
                      },
                      arguments: {
                        _type: 'PathArguments::None'
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 20,
                          column: 4
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 20,
                          column: 78
                        }
                      }
                    },
                    _type: 'Punctuated',
                    length: 1
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 20,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 20,
                      column: 78
                    }
                  }
                },
                tokens: {
                  0: {
                    _type: 'Punct',
                    as_char: '=',
                    spacing: {
                      _type: 'Spacing::Alone'
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 20,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 20,
                        column: 78
                      }
                    }
                  },
                  1: {
                    _type: 'Literal',
                    to_string:
                      '" Allows operator to transfer / send any token from the owner\'s account."',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 20,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 20,
                        column: 78
                      }
                    }
                  },
                  _type: 'TokenStream',
                  length: 2
                },
                bracket_token: {
                  _type: 'Bracket',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 20,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 20,
                      column: 78
                    }
                  }
                },
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 20,
                    column: 4
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 20,
                    column: 78
                  }
                }
              },
              {
                _type: 'Attribute',
                pound_token: {
                  _type: 'Pound',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 21,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 21,
                      column: 73
                    }
                  }
                },
                style: {
                  _type: 'AttrStyle::Outer'
                },
                path: {
                  _type: 'Path',
                  segments: {
                    0: {
                      _type: 'PathSegment',
                      ident: {
                        _type: 'Ident',
                        to_string: 'doc',
                        span: {
                          _type: 'Span',
                          start: {
                            _type: 'LineColumn',
                            line: 21,
                            column: 4
                          },
                          end: {
                            _type: 'LineColumn',
                            line: 21,
                            column: 73
                          }
                        }
                      },
                      arguments: {
                        _type: 'PathArguments::None'
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 21,
                          column: 4
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 21,
                          column: 73
                        }
                      }
                    },
                    _type: 'Punctuated',
                    length: 1
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 21,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 21,
                      column: 73
                    }
                  }
                },
                tokens: {
                  0: {
                    _type: 'Punct',
                    as_char: '=',
                    spacing: {
                      _type: 'Spacing::Alone'
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 21,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 21,
                        column: 73
                      }
                    }
                  },
                  1: {
                    _type: 'Literal',
                    to_string:
                      '" If expiration is set, then this allowance has a time/height limit"',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 21,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 21,
                        column: 73
                      }
                    }
                  },
                  _type: 'TokenStream',
                  length: 2
                },
                bracket_token: {
                  _type: 'Bracket',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 21,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 21,
                      column: 73
                    }
                  }
                },
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 21,
                    column: 4
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 21,
                    column: 73
                  }
                }
              }
            ],
            ident: {
              _type: 'Ident',
              to_string: 'ApproveAll',
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 22,
                  column: 4
                },
                end: {
                  _type: 'LineColumn',
                  line: 22,
                  column: 14
                }
              }
            },
            fields: {
              _type: 'FieldsNamed',
              named: {
                0: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'operator',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 23,
                        column: 8
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 23,
                        column: 16
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 23,
                        column: 16
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 23,
                        column: 17
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'String',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 23,
                                column: 18
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 23,
                                column: 24
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 23,
                              column: 18
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 23,
                              column: 24
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 23,
                          column: 18
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 23,
                          column: 24
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 23,
                        column: 18
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 23,
                        column: 24
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 23,
                      column: 8
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 23,
                      column: 24
                    }
                  }
                },
                1: {
                  _type: 'Comma',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 23,
                      column: 24
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 23,
                      column: 25
                    }
                  }
                },
                2: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'expires',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 24,
                        column: 8
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 24,
                        column: 15
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 24,
                        column: 15
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 24,
                        column: 16
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'Option',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 24,
                                column: 17
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 24,
                                column: 23
                              }
                            }
                          },
                          arguments: {
                            _type: 'AngleBracketedGenericArguments',
                            lt_token: {
                              _type: 'Lt',
                              span: {
                                _type: 'Span',
                                start: {
                                  _type: 'LineColumn',
                                  line: 24,
                                  column: 23
                                },
                                end: {
                                  _type: 'LineColumn',
                                  line: 24,
                                  column: 24
                                }
                              }
                            },
                            args: {
                              0: {
                                _type: 'TypePath',
                                path: {
                                  _type: 'Path',
                                  segments: {
                                    0: {
                                      _type: 'PathSegment',
                                      ident: {
                                        _type: 'Ident',
                                        to_string: 'Expiration',
                                        span: {
                                          _type: 'Span',
                                          start: {
                                            _type: 'LineColumn',
                                            line: 24,
                                            column: 24
                                          },
                                          end: {
                                            _type: 'LineColumn',
                                            line: 24,
                                            column: 34
                                          }
                                        }
                                      },
                                      arguments: {
                                        _type: 'PathArguments::None'
                                      },
                                      span: {
                                        _type: 'Span',
                                        start: {
                                          _type: 'LineColumn',
                                          line: 24,
                                          column: 24
                                        },
                                        end: {
                                          _type: 'LineColumn',
                                          line: 24,
                                          column: 34
                                        }
                                      }
                                    },
                                    _type: 'Punctuated',
                                    length: 1
                                  },
                                  span: {
                                    _type: 'Span',
                                    start: {
                                      _type: 'LineColumn',
                                      line: 24,
                                      column: 24
                                    },
                                    end: {
                                      _type: 'LineColumn',
                                      line: 24,
                                      column: 34
                                    }
                                  }
                                },
                                span: {
                                  _type: 'Span',
                                  start: {
                                    _type: 'LineColumn',
                                    line: 24,
                                    column: 24
                                  },
                                  end: {
                                    _type: 'LineColumn',
                                    line: 24,
                                    column: 34
                                  }
                                }
                              },
                              _type: 'Punctuated',
                              length: 1
                            },
                            gt_token: {
                              _type: 'Gt',
                              span: {
                                _type: 'Span',
                                start: {
                                  _type: 'LineColumn',
                                  line: 24,
                                  column: 34
                                },
                                end: {
                                  _type: 'LineColumn',
                                  line: 24,
                                  column: 35
                                }
                              }
                            },
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 24,
                                column: 23
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 24,
                                column: 35
                              }
                            }
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 24,
                              column: 17
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 24,
                              column: 35
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 24,
                          column: 17
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 24,
                          column: 35
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 24,
                        column: 17
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 24,
                        column: 35
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 24,
                      column: 8
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 24,
                      column: 35
                    }
                  }
                },
                3: {
                  _type: 'Comma',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 24,
                      column: 35
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 24,
                      column: 36
                    }
                  }
                },
                _type: 'Punctuated',
                length: 4
              },
              brace_token: {
                _type: 'Brace',
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 22,
                    column: 15
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 25,
                    column: 5
                  }
                }
              },
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 22,
                  column: 15
                },
                end: {
                  _type: 'LineColumn',
                  line: 25,
                  column: 5
                }
              }
            },
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 20,
                column: 4
              },
              end: {
                _type: 'LineColumn',
                line: 25,
                column: 5
              }
            }
          },
          9: {
            _type: 'Comma',
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 25,
                column: 5
              },
              end: {
                _type: 'LineColumn',
                line: 25,
                column: 6
              }
            }
          },
          10: {
            _type: 'Variant',
            attrs: [
              {
                _type: 'Attribute',
                pound_token: {
                  _type: 'Pound',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 26,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 26,
                      column: 55
                    }
                  }
                },
                style: {
                  _type: 'AttrStyle::Outer'
                },
                path: {
                  _type: 'Path',
                  segments: {
                    0: {
                      _type: 'PathSegment',
                      ident: {
                        _type: 'Ident',
                        to_string: 'doc',
                        span: {
                          _type: 'Span',
                          start: {
                            _type: 'LineColumn',
                            line: 26,
                            column: 4
                          },
                          end: {
                            _type: 'LineColumn',
                            line: 26,
                            column: 55
                          }
                        }
                      },
                      arguments: {
                        _type: 'PathArguments::None'
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 26,
                          column: 4
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 26,
                          column: 55
                        }
                      }
                    },
                    _type: 'Punctuated',
                    length: 1
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 26,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 26,
                      column: 55
                    }
                  }
                },
                tokens: {
                  0: {
                    _type: 'Punct',
                    as_char: '=',
                    spacing: {
                      _type: 'Spacing::Alone'
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 26,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 26,
                        column: 55
                      }
                    }
                  },
                  1: {
                    _type: 'Literal',
                    to_string:
                      '" Remove previously granted ApproveAll permission"',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 26,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 26,
                        column: 55
                      }
                    }
                  },
                  _type: 'TokenStream',
                  length: 2
                },
                bracket_token: {
                  _type: 'Bracket',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 26,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 26,
                      column: 55
                    }
                  }
                },
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 26,
                    column: 4
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 26,
                    column: 55
                  }
                }
              }
            ],
            ident: {
              _type: 'Ident',
              to_string: 'RevokeAll',
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 27,
                  column: 4
                },
                end: {
                  _type: 'LineColumn',
                  line: 27,
                  column: 13
                }
              }
            },
            fields: {
              _type: 'FieldsNamed',
              named: {
                0: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'operator',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 27,
                        column: 16
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 27,
                        column: 24
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 27,
                        column: 24
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 27,
                        column: 25
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'String',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 27,
                                column: 26
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 27,
                                column: 32
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 27,
                              column: 26
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 27,
                              column: 32
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 27,
                          column: 26
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 27,
                          column: 32
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 27,
                        column: 26
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 27,
                        column: 32
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 27,
                      column: 16
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 27,
                      column: 32
                    }
                  }
                },
                _type: 'Punctuated',
                length: 1
              },
              brace_token: {
                _type: 'Brace',
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 27,
                    column: 14
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 27,
                    column: 34
                  }
                }
              },
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 27,
                  column: 14
                },
                end: {
                  _type: 'LineColumn',
                  line: 27,
                  column: 34
                }
              }
            },
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 26,
                column: 4
              },
              end: {
                _type: 'LineColumn',
                line: 27,
                column: 34
              }
            }
          },
          11: {
            _type: 'Comma',
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 27,
                column: 34
              },
              end: {
                _type: 'LineColumn',
                line: 27,
                column: 35
              }
            }
          },
          12: {
            _type: 'Variant',
            attrs: [
              {
                _type: 'Attribute',
                pound_token: {
                  _type: 'Pound',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 29,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 29,
                      column: 65
                    }
                  }
                },
                style: {
                  _type: 'AttrStyle::Outer'
                },
                path: {
                  _type: 'Path',
                  segments: {
                    0: {
                      _type: 'PathSegment',
                      ident: {
                        _type: 'Ident',
                        to_string: 'doc',
                        span: {
                          _type: 'Span',
                          start: {
                            _type: 'LineColumn',
                            line: 29,
                            column: 4
                          },
                          end: {
                            _type: 'LineColumn',
                            line: 29,
                            column: 65
                          }
                        }
                      },
                      arguments: {
                        _type: 'PathArguments::None'
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 29,
                          column: 4
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 29,
                          column: 65
                        }
                      }
                    },
                    _type: 'Punctuated',
                    length: 1
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 29,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 29,
                      column: 65
                    }
                  }
                },
                tokens: {
                  0: {
                    _type: 'Punct',
                    as_char: '=',
                    spacing: {
                      _type: 'Spacing::Alone'
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 29,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 29,
                        column: 65
                      }
                    }
                  },
                  1: {
                    _type: 'Literal',
                    to_string:
                      '" Mint a new NFT, can only be called by the contract minter"',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 29,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 29,
                        column: 65
                      }
                    }
                  },
                  _type: 'TokenStream',
                  length: 2
                },
                bracket_token: {
                  _type: 'Bracket',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 29,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 29,
                      column: 65
                    }
                  }
                },
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 29,
                    column: 4
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 29,
                    column: 65
                  }
                }
              }
            ],
            ident: {
              _type: 'Ident',
              to_string: 'Mint',
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 30,
                  column: 4
                },
                end: {
                  _type: 'LineColumn',
                  line: 30,
                  column: 8
                }
              }
            },
            fields: {
              _type: 'FieldsUnnamed',
              unnamed: {
                0: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'MintMsg',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 30,
                                column: 9
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 30,
                                column: 16
                              }
                            }
                          },
                          arguments: {
                            _type: 'AngleBracketedGenericArguments',
                            lt_token: {
                              _type: 'Lt',
                              span: {
                                _type: 'Span',
                                start: {
                                  _type: 'LineColumn',
                                  line: 30,
                                  column: 16
                                },
                                end: {
                                  _type: 'LineColumn',
                                  line: 30,
                                  column: 17
                                }
                              }
                            },
                            args: {
                              0: {
                                _type: 'TypePath',
                                path: {
                                  _type: 'Path',
                                  segments: {
                                    0: {
                                      _type: 'PathSegment',
                                      ident: {
                                        _type: 'Ident',
                                        to_string: 'T',
                                        span: {
                                          _type: 'Span',
                                          start: {
                                            _type: 'LineColumn',
                                            line: 30,
                                            column: 17
                                          },
                                          end: {
                                            _type: 'LineColumn',
                                            line: 30,
                                            column: 18
                                          }
                                        }
                                      },
                                      arguments: {
                                        _type: 'PathArguments::None'
                                      },
                                      span: {
                                        _type: 'Span',
                                        start: {
                                          _type: 'LineColumn',
                                          line: 30,
                                          column: 17
                                        },
                                        end: {
                                          _type: 'LineColumn',
                                          line: 30,
                                          column: 18
                                        }
                                      }
                                    },
                                    _type: 'Punctuated',
                                    length: 1
                                  },
                                  span: {
                                    _type: 'Span',
                                    start: {
                                      _type: 'LineColumn',
                                      line: 30,
                                      column: 17
                                    },
                                    end: {
                                      _type: 'LineColumn',
                                      line: 30,
                                      column: 18
                                    }
                                  }
                                },
                                span: {
                                  _type: 'Span',
                                  start: {
                                    _type: 'LineColumn',
                                    line: 30,
                                    column: 17
                                  },
                                  end: {
                                    _type: 'LineColumn',
                                    line: 30,
                                    column: 18
                                  }
                                }
                              },
                              _type: 'Punctuated',
                              length: 1
                            },
                            gt_token: {
                              _type: 'Gt',
                              span: {
                                _type: 'Span',
                                start: {
                                  _type: 'LineColumn',
                                  line: 30,
                                  column: 18
                                },
                                end: {
                                  _type: 'LineColumn',
                                  line: 30,
                                  column: 19
                                }
                              }
                            },
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 30,
                                column: 16
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 30,
                                column: 19
                              }
                            }
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 30,
                              column: 9
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 30,
                              column: 19
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 30,
                          column: 9
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 30,
                          column: 19
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 30,
                        column: 9
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 30,
                        column: 19
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 30,
                      column: 9
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 30,
                      column: 19
                    }
                  }
                },
                _type: 'Punctuated',
                length: 1
              },
              paren_token: {
                _type: 'Paren',
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 30,
                    column: 8
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 30,
                    column: 20
                  }
                }
              },
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 30,
                  column: 8
                },
                end: {
                  _type: 'LineColumn',
                  line: 30,
                  column: 20
                }
              }
            },
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 29,
                column: 4
              },
              end: {
                _type: 'LineColumn',
                line: 30,
                column: 20
              }
            }
          },
          13: {
            _type: 'Comma',
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 30,
                column: 20
              },
              end: {
                _type: 'LineColumn',
                line: 30,
                column: 21
              }
            }
          },
          14: {
            _type: 'Variant',
            attrs: [
              {
                _type: 'Attribute',
                pound_token: {
                  _type: 'Pound',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 32,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 32,
                      column: 44
                    }
                  }
                },
                style: {
                  _type: 'AttrStyle::Outer'
                },
                path: {
                  _type: 'Path',
                  segments: {
                    0: {
                      _type: 'PathSegment',
                      ident: {
                        _type: 'Ident',
                        to_string: 'doc',
                        span: {
                          _type: 'Span',
                          start: {
                            _type: 'LineColumn',
                            line: 32,
                            column: 4
                          },
                          end: {
                            _type: 'LineColumn',
                            line: 32,
                            column: 44
                          }
                        }
                      },
                      arguments: {
                        _type: 'PathArguments::None'
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 32,
                          column: 4
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 32,
                          column: 44
                        }
                      }
                    },
                    _type: 'Punctuated',
                    length: 1
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 32,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 32,
                      column: 44
                    }
                  }
                },
                tokens: {
                  0: {
                    _type: 'Punct',
                    as_char: '=',
                    spacing: {
                      _type: 'Spacing::Alone'
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 32,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 32,
                        column: 44
                      }
                    }
                  },
                  1: {
                    _type: 'Literal',
                    to_string: '" Burn an NFT the sender has access to"',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 32,
                        column: 4
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 32,
                        column: 44
                      }
                    }
                  },
                  _type: 'TokenStream',
                  length: 2
                },
                bracket_token: {
                  _type: 'Bracket',
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 32,
                      column: 4
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 32,
                      column: 44
                    }
                  }
                },
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 32,
                    column: 4
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 32,
                    column: 44
                  }
                }
              }
            ],
            ident: {
              _type: 'Ident',
              to_string: 'Burn',
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 33,
                  column: 4
                },
                end: {
                  _type: 'LineColumn',
                  line: 33,
                  column: 8
                }
              }
            },
            fields: {
              _type: 'FieldsNamed',
              named: {
                0: {
                  _type: 'Field',
                  attrs: [],
                  vis: {
                    _type: 'Visibility::Inherited'
                  },
                  ident: {
                    _type: 'Ident',
                    to_string: 'token_id',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 33,
                        column: 11
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 33,
                        column: 19
                      }
                    }
                  },
                  colon_token: {
                    _type: 'Colon',
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 33,
                        column: 19
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 33,
                        column: 20
                      }
                    }
                  },
                  ty: {
                    _type: 'TypePath',
                    path: {
                      _type: 'Path',
                      segments: {
                        0: {
                          _type: 'PathSegment',
                          ident: {
                            _type: 'Ident',
                            to_string: 'String',
                            span: {
                              _type: 'Span',
                              start: {
                                _type: 'LineColumn',
                                line: 33,
                                column: 21
                              },
                              end: {
                                _type: 'LineColumn',
                                line: 33,
                                column: 27
                              }
                            }
                          },
                          arguments: {
                            _type: 'PathArguments::None'
                          },
                          span: {
                            _type: 'Span',
                            start: {
                              _type: 'LineColumn',
                              line: 33,
                              column: 21
                            },
                            end: {
                              _type: 'LineColumn',
                              line: 33,
                              column: 27
                            }
                          }
                        },
                        _type: 'Punctuated',
                        length: 1
                      },
                      span: {
                        _type: 'Span',
                        start: {
                          _type: 'LineColumn',
                          line: 33,
                          column: 21
                        },
                        end: {
                          _type: 'LineColumn',
                          line: 33,
                          column: 27
                        }
                      }
                    },
                    span: {
                      _type: 'Span',
                      start: {
                        _type: 'LineColumn',
                        line: 33,
                        column: 21
                      },
                      end: {
                        _type: 'LineColumn',
                        line: 33,
                        column: 27
                      }
                    }
                  },
                  span: {
                    _type: 'Span',
                    start: {
                      _type: 'LineColumn',
                      line: 33,
                      column: 11
                    },
                    end: {
                      _type: 'LineColumn',
                      line: 33,
                      column: 27
                    }
                  }
                },
                _type: 'Punctuated',
                length: 1
              },
              brace_token: {
                _type: 'Brace',
                span: {
                  _type: 'Span',
                  start: {
                    _type: 'LineColumn',
                    line: 33,
                    column: 9
                  },
                  end: {
                    _type: 'LineColumn',
                    line: 33,
                    column: 29
                  }
                }
              },
              span: {
                _type: 'Span',
                start: {
                  _type: 'LineColumn',
                  line: 33,
                  column: 9
                },
                end: {
                  _type: 'LineColumn',
                  line: 33,
                  column: 29
                }
              }
            },
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 32,
                column: 4
              },
              end: {
                _type: 'LineColumn',
                line: 33,
                column: 29
              }
            }
          },
          15: {
            _type: 'Comma',
            span: {
              _type: 'Span',
              start: {
                _type: 'LineColumn',
                line: 33,
                column: 29
              },
              end: {
                _type: 'LineColumn',
                line: 33,
                column: 30
              }
            }
          },
          _type: 'Punctuated',
          length: 16
        },
        brace_token: {
          _type: 'Brace',
          span: {
            _type: 'Span',
            start: {
              _type: 'LineColumn',
              line: 1,
              column: 23
            },
            end: {
              _type: 'LineColumn',
              line: 34,
              column: 1
            }
          }
        },
        span: {
          _type: 'Span',
          start: {
            _type: 'LineColumn',
            line: 1,
            column: 0
          },
          end: {
            _type: 'LineColumn',
            line: 34,
            column: 1
          }
        }
      }
    ],
    span: {
      _type: 'Span',
      start: {
        _type: 'LineColumn',
        line: 1,
        column: 0
      },
      end: {
        _type: 'LineColumn',
        line: 34,
        column: 1
      }
    }
  });
  expect(str).toMatchSnapshot();
});
